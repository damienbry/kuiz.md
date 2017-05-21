'use strict';

const parser = require('./parser');
const kuiz = require('./src');

module.exports = {
  init: (kuizString, callback) => kuiz.init(kuizString, callback),
  update: (kuizString) => kuiz.init(kuizString)
}
