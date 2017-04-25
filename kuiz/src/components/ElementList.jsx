'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const Question = require('./Question.jsx');
const Text = require('./Text.jsx');

module.exports = createReactClass({
  displayName: 'ElementList',

  propTypes: {
    elements: PropTypes.array.isRequired
  },

  render() {
    return <div className="elementList">
      {this.props.elements.map(({type, data}, index) => {
        switch(type) {
          case 'questions':
            return <Question key={index}
                             title={data.title}
                             questionId={data.id}/>;
          default:
            return <Text key={index} data={data.line}/>;
        }
      })}
    </div>;
  }
});

