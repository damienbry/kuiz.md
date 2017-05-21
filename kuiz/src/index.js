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
const parser = require('../parser');

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
    errors: [],
    grade: 0,
    maxGrade: 0
  }
};

let store = null;

const init = (kuizString, callback) => {

  //Storing the user's callback
  initialState.callback = callback;

  const newState = reducers(initialState, actions.generateKuiz(parser(kuizString)));
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
  update: (kuizString) => {
    if (!store) {
      throw new Error('You must call the init method before updating the kuiz');
    }

    store.dispatch(actions.generateKuiz(parser(kuizString)));
  }
};
