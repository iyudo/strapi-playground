/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async find(ctx) {
        console.log('start custom controller article find being called');

        console.log(ctx.params);

        const response = await super.find(ctx);

        // console.log(response);

        console.log('end custom controller article find being called');

        return response;
    },
}));
