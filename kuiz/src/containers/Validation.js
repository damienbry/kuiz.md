'use strict';

const {connect} = require('react-redux');
const {submitKuiz, tryAgain} = require('../actions');
const Validation = require('../components/Validation.jsx');

const mapStateToProps = (state, ownProps) => {
  return {
    isValid: state.ui.isValid,
    submitted: state.ui.submitted,
    grade: state.ui.grade,
    maxGrade: state.ui.maxGrade
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (data) => {
      dispatch(submitKuiz(data));
    },
    tryAgain: () => {
      dispatch(tryAgain());
    }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Validation);

