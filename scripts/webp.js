const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['public/img/*.jpg'], {
  destination: 'public/img/',
  plugins: [imageminWebp({quality: 90})]
}).then(() => {
  console.log('Completed');
});
