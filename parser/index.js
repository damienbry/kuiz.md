var fs = require('fs');
fs.readFile( __dirname + '/../examples/quiz.md', function (err, data) {
  if (err) {
    throw err;
  }

  console.log(JSON.stringify(require('./parser')(data.toString())));
});

