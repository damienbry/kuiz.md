// Import dependencies
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {createStore} = require('redux');

// Import styling
require('./styles/default/app.scss');

const Root = require('./components/Root.jsx');
const reducers = require('./reducers');
const actions = require('./actions');

const initialState = {
  questions: {
    byId: {},
    allIds: []
  },
  answers: {
    byId: {},
    allIds: []
  },
  raw: {
    byId: {},
    allIds: []
  },
  elements: [],
  ui: {
    isValid: false,
    submitted: false,
    errors: []
  }
};

let store = null;

const init = (quizData) => {
  const newState = reducers(initialState, actions.generateQuiz(quizData));
  store = createStore(reducers, newState);

  ReactDOM.render(
    <Provider store={store}>
      {Root}
    </Provider>,
    document.getElementsByClassName('kuiz')[0]
  );
}

module.exports = {
  init,
  update: (quizData) => {
    if (!store) {
      throw new Error('You must call the init method before updating the kuiz');
    }

    store.dispatch(actions.generateQuiz(quizData));
  }
};
