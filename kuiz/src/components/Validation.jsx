'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

module.exports = createReactClass({
  displayName: 'Validation',

  propTypes: {
    submitted: PropTypes.bool.isRequired,
    isValid: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    tryAgain: PropTypes.func.isRequired
  },

  onSubmit() {
    this.props.onSubmit();
  },

  tryAgain() {
    this.props.tryAgain();
  },

  render() {
    const resultText = this.props.isValid ? 'Quizz valid ! 💪' : <div className="tryAgain">
      You have some error(s), keep learning ! 🚀
      <button onClick={this.tryAgain}>Try again</button>
    </div>;
    const element = this.props.submitted ? resultText : <button onClick={this.onSubmit}>Submit</button>;
    return <div className="validation">
      {element}
    </div>;
  }
});

