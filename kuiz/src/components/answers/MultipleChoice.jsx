'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const Text = require('../Text.jsx');

module.exports = createReactClass({
  displayName: 'MultipleChoice',

  propTypes: {
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired
  },

  onChange() {
    this.props.onChange();
  },

  render() {
    return <div className="answer">
      <input type="checkbox" onChange={this.onChange} checked={this.props.selected}/>
      <div className="answerText" style={{display: 'inline-block', color: this.props.hasError ? 'red' : 'auto'}}>
        {this.props.text}
      </div>
    </div>;
  }
});
