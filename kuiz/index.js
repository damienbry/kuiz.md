'use strict';

const parser = require('./parser');
const kuiz = require('./src');

module.exports = {
  init: (kuizString, callback, elementToRenderInto) => kuiz.init(kuizString, callback, elementToRenderInto),
  update: (kuizString) => kuiz.init(kuizString)
}
