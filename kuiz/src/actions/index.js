'use strict';

// @todo: use Symbols to hold the events name instead of strings
module.exports = {
  toggleAnswer: (id) => {
    return {
      type: 'TOGGLE_ANSWER',
      id
    };
  },
  submitQuizz: () => {
    return {
      type: 'SUBMIT_QUIZZ'
    };
  },
  tryAgain: () => {
    return {
      type: 'TRY_AGAIN'
    };
  }
};
