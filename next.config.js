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

module.exports = {
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' }
    };
  },
  images: {
    loader: 'akamai',
    path: ''
  },
  nextConfig,
  basePath: process.env.BASE_URL,
  env: {
    basePath: process.env.BASE_URL,
    backEndUrl: process.env.BACKEND_URL
  }
};
