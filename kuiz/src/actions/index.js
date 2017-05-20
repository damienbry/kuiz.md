'use strict';

// @todo: use Symbols to hold the events name instead of strings
module.exports = {
  toggleAnswer: (id) => {
    return {
      type: 'TOGGLE_ANSWER',
      id
    };
  },
  submitKuiz: (data) => {
    return {
      type: 'SUBMIT_KUIZ',
      data
    };
  },
  tryAgain: () => {
    return {
      type: 'TRY_AGAIN'
    };
  },
  generateKuiz: (data) => {
    return {
      type: 'GENERATE_KUIZ',
      data
    }
  }
};
