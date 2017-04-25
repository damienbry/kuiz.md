'use strict';

const {connect} = require('react-redux');
const AnswerList = require('../components/AnswerList.jsx');

const mapStateToProps = (state, ownProps) => {
  const answers = state.answers.allIds
                               .filter(id => state.answers.byId[id].questionId == ownProps.questionId)
                               .map(id => state.answers.byId[id]);

  return {
    answers,
    type: state.questions.byId[ownProps.questionId].type
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerList);

