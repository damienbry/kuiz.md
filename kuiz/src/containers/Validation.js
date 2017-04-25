'use strict';

const {connect} = require('react-redux');
const {submitQuizz, tryAgain} = require('../actions');
const Validation = require('../components/Validation.jsx');

const mapStateToProps = (state, ownProps) => {
  return {
    isValid: state.ui.isValid,
    submitted: state.ui.submitted
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: () => {
      dispatch(submitQuizz());
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

