'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const {markdown} = require('markdown');

module.exports = createReactClass({
  displayName: 'Text',

  propTypes: {
    data: PropTypes.string.isRequired
  },

  render() {
    return <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(this.props.data)}}>
    </div>;
  }
});
