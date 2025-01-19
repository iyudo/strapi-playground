#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const buildManifestVersion = "0.1.1";

class BuildManifest {
    constructor(name, productDomain) {
        this.startTime = new Date().toISOString();
        this.name = name;
        this.productDomain = productDomain;
        this.deployment = {};

        const shortRef = execSync('git rev-parse --short HEAD').toString().trim();
        this.image = process.env.IMAGE_DIGEST || `${shortRef}@local`;
        this.buildId = process.env.CODEBUILD_BUILD_ARN || `${process.env.USER}_[at]_${process.env.HOST}_${this.startTime}`;
        this.buildManifestVersion = buildManifestVersion;

        const stringCommits = '[' + execSync(
            `git log --pretty=format:'{"shortRef": "%h", "authorDateIso": "%aI", "authorName": "%an", "message": "%f"}' -25`
        ).toString().trim().replace(/\n/g, ',') + ']';
        this.gitInfo = {
            commits: JSON.parse(stringCommits),
            repoUrl: process.env.CODEBUILD_SOURCE_REPO_URL || "",
        };

        this.baseImage = "node:20-alpine";
        this.readAppspec();
    }

    readAppspec(appspecFilePath = "appspec.json", stagingAppspecFilePath = "appspec_staging.json") {
        const tags = [];
        const imageTag = process.env.IMAGE_TAG;
        if (imageTag) {
            tags.push(imageTag, "latest");
        }

        const appSpec = JSON.parse(fs.readFileSync(appspecFilePath, 'utf8'));
        const stagingAppSpec = JSON.parse(fs.readFileSync(stagingAppspecFilePath, 'utf8'));

        this.deployment = {
            containerInfo: {
                name: `015110552125.dkr.ecr.ap-southeast-1.amazonaws.com/${this.name}-app`,
                tags: tags,
                digest: this.image.split('@')[1],
                endTime: new Date().toISOString(),
            },
            stagingAppspec: stagingAppSpec,
            productionAppspec: appSpec,
        };
    }

    writeToFile(filePath = "build_manifest.json") {
        fs.writeFileSync(filePath, JSON.stringify(this, null, 2));
    }
}

function updateBuildManifestEndTime(filePath = "build_manifest.json") {
    const buildManifest = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    buildManifest.endTime = new Date().toISOString();
    fs.writeFileSync(filePath, JSON.stringify(buildManifest, null, 2));
}

function parseArgs() {
    const args = process.argv.slice(2);
    const parsed = { app: null, pd: null, finishBuild: false };

    args.forEach((arg, index) => {
        if (arg === '--application' && args[index + 1]) {
            parsed.app = args[index + 1];
        } else if (arg === '--product-domain' && args[index + 1]) {
            parsed.pd = args[index + 1];
        } else if (arg === '--finish') {
            parsed.finishBuild = true;
        }
    });

    return parsed;
}

if (require.main === module) {
    const args = parseArgs();

    if (args.finishBuild) {
        updateBuildManifestEndTime();
    } else if (!args.app || !args.pd) {
        console.error('Usage: --application <app_name> --product-domain <product_domain> [--finish]');
        process.exit(1);
    } else {
        const buildManifest = new BuildManifest(args.app, args.pd);
        buildManifest.writeToFile();
    }
}
