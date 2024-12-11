export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com', "'self'", 'https://proxy-event.ckeditor.com'],
          'connect-src': ["'self'", 'http:', 'https:'],
          'img-src': ['*', 'data:'],
          'style-src': ["'self'", "'unsafe-inline'"],
          'frame-src': ['*'],
          'default-src': ["'none'"]
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'global::my-middleware',
];
