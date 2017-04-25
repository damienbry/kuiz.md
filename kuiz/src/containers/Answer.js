'use strict';

const {connect} = require('react-redux');
const {toggleAnswer} = require('../actions');
const answers = require('../components/answers');

const ANSWERS_TYPES = {
  'multiple-choice': answers.MultipleChoice
};

const mapStateToProps = (state, ownProps) => {
  const answer = state.answers.byId[ownProps.answerId];
  return {
    text: answer.text,
    selected: answer.selected,
    hasError: state.ui.errors.filter(id => answer.id === id).length > 0
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: () => {
      dispatch(toggleAnswer(ownProps.answerId));
    }
  };
};

module.exports = (type) => {
  const Answer = ANSWERS_TYPES[type];

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Answer);
}

