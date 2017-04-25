var fs = require('fs');
fs.readFile( __dirname + '/examples/quiz.md', function (err, data) {
  if (err) {
    throw err;
  }

  require('./parser')(data.toString().match(/[^\r\n]+/g));
});

