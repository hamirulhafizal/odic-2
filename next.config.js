/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/list',
  '@fullcalendar/timeline'
]);

const nextConfig = withTM({
  reactStrictMode: true
});

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
module.exports = {
  nextConfig,
  trailingSlash: true,
  basePath: process.env.BASE_URL,
  env: {
    basePath: process.env.BASE_URL,
    backEndUrl: process.env.BACKEND_URL
  }
};
