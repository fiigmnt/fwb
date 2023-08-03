module.exports = {
    globDirectory: 'public/',
    globPatterns: [
      '**/*.{json,ico,html,js,css}', // include json, ico, html, js, css files in service worker
      'models/*.{usdz,glb}', // include usdz and glb files in service worker
    ],
    swDest: 'public/sw.js',
  };