// set babel in entry file
require('babel-register')({
  plugins: ['transform-async-to-generator']
});

require('./app.js');
