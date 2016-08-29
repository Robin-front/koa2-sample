
var path = require('path');
var Logger = require('mini-logger');
var logger = Logger({
  dir: path.join(__dirname, '../logs'),
  // categories: [ 'http' ],
  format: '[{category}.]YYYY-MM-DD[.log]'
});

// logger.error(new Error('error'));
// logger.http('http request url: %s', 'https://github.com');
module.exports = logger;
