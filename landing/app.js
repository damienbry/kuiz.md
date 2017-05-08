require('./src/styles/app.scss');

const app = require('../kuiz/src');
const textarea = document.getElementsByClassName('form')[0];
const parser = require('../parser/parser');

const parseTextarea = () => {
  return parser(textarea.value);
}

app.init(parseTextarea());

// Update the quiz
let interval = null;

const beginInterval = () => {
  interval = setInterval(() => {
  app.update(parseTextarea());
  }, 150);
};

const endInterval = () => {
  clearInterval(interval);
  interval = null;
};

textarea.addEventListener('focus', beginInterval);
textarea.addEventListener('blur', endInterval);

