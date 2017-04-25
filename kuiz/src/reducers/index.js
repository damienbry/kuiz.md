'use strict';

module.exports = (state = {}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'TOGGLE_ANSWER':
      const answer = state.answers.byId[action.id];

      if (!answer) {
        return state;
      }

      newState.answers.byId[action.id].selected = !answer.selected;

      return newState;
    case 'SUBMIT_QUIZZ':
      let isValid = true;

      newState.answers.allIds.map(id => state.answers.byId[id])
                          .forEach(answer => {
                            if (answer.isCorrect !== answer.selected) {
                              if (!answer.isCorrect) {
                                newState.ui.errors.push(answer.id);
                              }

                              isValid = false;
                            }
                          });

      newState.ui.isValid = isValid;
      newState.ui.submitted = true;

      return newState;
    case 'TRY_AGAIN':
      newState.answers.allIds.map(id => state.answers.byId[id])
                          .forEach(answer => {
                            answer.selected = false;
                          });

      newState.ui.isValid = false;
      newState.ui.submitted = false;
      newState.ui.errors = [];

      return newState;
    default:
      return state;
  }
};
