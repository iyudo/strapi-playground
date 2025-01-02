export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/auth/sso',
        handler: 'auth.sso',
        config: {
            auth: false,
        }
      },
      {
        method: 'GET',
        path: '/auth/callback',
        handler: 'auth.callback',
        config: {
          auth: false, // No Strapi JWT required for this endpoint
        },
      },
    ]
  }