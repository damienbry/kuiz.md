'use strict';

// Import dependencies
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {createStore} = require('redux');

const quizz = require('./quizz.json');

const Root = require('./src/components/Root.jsx');
const reducers = require('./src/reducers');

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

let questionCount = 0;
let answerCount = 0;
let rawCount = 0;

// Normalizes the state
quizz.forEach(element => {
  if (element.type === 'question') {
    const question = element.data;
    console.log('question', question);
    question.id = questionCount;

    question.answers.forEach((answer) => {
      answer.id = answerCount;
      answer.selected = false;
      answer.questionId = question.id;
      initialState.answers.byId[answer.id] = answer;
      initialState.answers.allIds.push(answer.id);
      answerCount++;
    });

    delete question.answers;

    initialState.questions.byId[question.id] = question;
    initialState.questions.allIds.push(question.id);
    initialState.elements.push({
      id: question.id,
      type: 'questions'
    });
    questionCount++;
  } else {
    const raw = element.data;
    raw.id = rawCount;
    initialState.raw.byId[raw.id] = raw;
    initialState.raw.allIds.push(raw.id);
    initialState.elements.push({
      id: raw.id,
      type: 'raw'
    });
    rawCount++;
  }
});

console.log('initialState', initialState);

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
    {Root}
  </Provider>,
  document.getElementById('root')
);

