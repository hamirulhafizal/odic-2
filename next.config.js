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

module.exports = nextConfig;

// module.exports = {
//   nextConfig,
//   exportPathMap: async function () {
//     const paths = {
//       '/': { page: '/' }
//     };
//     return paths; //<--this was missing previously
//   }
// };
