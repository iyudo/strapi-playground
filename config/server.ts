export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_URL', 'https://cxpcms-lbext-cbf157041239fec2-695940355.ap-southeast-1.elb.amazonaws.com'),
  proxy: env.bool('IS_PROXIED', true),
});
