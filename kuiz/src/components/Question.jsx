'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const Text = require('./Text.jsx');
const AnswerList = require('../containers/AnswerList');

module.exports = createReactClass({
  displayName: 'Question',

  propTypes: {
    questionId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  },

  render() {
    /*

      <h1>{this.props.title}</h1>
      <Text data={this.props.text}/>
     * */
    return <div className="question">
      <AnswerList questionId={this.props.questionId}/>
    </div>;
  }
});

