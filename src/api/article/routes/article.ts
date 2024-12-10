/**
 * article router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article', {
    config: {
        find: {
            auth: false,
            // policies: ['global::test-policy'],
        },
    }
});
