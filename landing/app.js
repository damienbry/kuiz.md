require('./src/styles/app.scss');

const app = require('../kuiz/dist');
const textarea = document.getElementsByClassName('form')[0];

const parseTextarea = () => {
  return textarea.value;
}

app.init(parseTextarea(), (email) => {
  alert(email);
}, 'kuiz');

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

