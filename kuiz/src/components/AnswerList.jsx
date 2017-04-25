'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
const answerFactory = require('../containers/Answer');

module.exports = createReactClass({
  displayName: 'AnswerList',

  propTypes: {
    type: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired
  },

  render() {
    const Answer = answerFactory(this.props.type);
    const elements = this.props.answers.map((answer, index) => <Answer key={index} answerId={answer.id}/>);

    return <div className="answerList">
      {elements}
    </div>;
  }
});

