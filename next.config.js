/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//   dest: 'public'
// });

// const withTM = require('next-transpile-modules')([
//   '@fullcalendar/common',
//   '@babel/preset-react',
//   '@fullcalendar/common',
//   '@fullcalendar/daygrid',
//   '@fullcalendar/interaction',
//   '@fullcalendar/react',
//   '@fullcalendar/timegrid',
//   '@fullcalendar/list',
//   '@fullcalendar/timeline'
// ]);

// const nextConfig = withTM({
//   reactStrictMode: true
// });

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});

nextConfig = withPWA({
  presets: ['@babel/preset-react']
});

module.exports = nextConfig;
