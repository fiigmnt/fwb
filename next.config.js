const withPWA = require("next-pwa")({
  dest: "public", // destination
  disable: process.env.NODE_ENV === "development", // disable in development mode
  register: true,
  sw: "/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\.(?:usdz|glb)$/, // the URL pattern for your models
      handler: "CacheFirst",
      options: {
        cacheName: "3d-models-cache",
        expiration: {
          maxEntries: 20, // cache only the latest 20 entries
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /\/app\/.*\/page/, // match /app/[any-name]/page
      handler: 'CacheFirst',
      options: {
        cacheName: 'dynamic-pages-cache',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: /\/app\/collect\/.*\/page/, // match /app/[any-name]/page
      handler: 'CacheFirst',
      options: {
        cacheName: 'dynamic-pages-cache',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    }
  ],
});

module.exports = withPWA({
  experimental: {
    serverActions: true,
  },
});
