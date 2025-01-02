#!/bin/bash
set -eo pipefail

role_arn="arn:aws:iam::015110552125:role/BeiartfReader"

# parse command line arguments
case "$1" in
    -r) role_arn="$2"; shift 2;;
esac

PRINCIPAL=$(aws --region ap-southeast-1 sts get-caller-identity --output text --query UserId | cut -d : -f 2)

# assume the role_arn
response=$(aws sts assume-role --output text \
               --region ap-southeast-1 \
               --role-arn "$role_arn" \
               --role-session-name="$PRINCIPAL" \
               --query Credentials)

# creating a new aws profile
AWS_ACCESS_KEY_ID=$(echo $response | awk '{print $1}')
AWS_SECRET_ACCESS_KEY=$(echo $response | awk '{print $3}')
AWS_SESSION_TOKEN=$(echo $response | awk '{print $4}')
EXPIRATION=$(echo $response | awk '{print $2}')

eval "aws configure --profile beiartf set aws_access_key_id ${AWS_ACCESS_KEY_ID}"
eval "aws configure --profile beiartf set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}"
eval "aws configure --profile beiartf set aws_session_token ${AWS_SESSION_TOKEN}"

# ECR
aws --region ap-southeast-1 --profile beiartf ecr get-login-password | docker login --username AWS --password-stdin 015110552125.dkr.ecr.ap-southeast-1.amazonaws.com
aws --region ap-southeast-1 --profile beiartf ecr get-login-password | docker login --username AWS --password-stdin 745412875337.dkr.ecr.ap-southeast-1.amazonaws.com
echo "Valid until: $EXPIRATION"