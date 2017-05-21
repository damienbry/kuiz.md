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

  getInitialState() {
    return {
      email: ''
    };
  },

  onSubmit() {
    this.props.onSubmit({
      email: this.state.email
    });
  },

  tryAgain() {
    this.props.tryAgain();
  },

  onEmailChange(event) {
    this.setState({email: event.target.value});
  },

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.onSubmit();
    }
  },

  render() {
    const resultText = `Grade: ${this.props.grade} / ${this.props.maxGrade}`;

    const submitElement = <div className="submitContainer">
      <input type="email" name="email" placeholder="awesome@any.thing" onChange={this.onEmailChange} onKeyDown={this.onKeyDown}/>
      <button className="submit" onClick={this.onSubmit}>Submit</button>
    </div>;

    const element = this.props.submitted ? resultText : submitElement;

    return <div className="validation">
      {element}
    </div>;
  }
});

