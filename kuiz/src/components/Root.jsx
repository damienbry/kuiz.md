'use strict';

const React = require('react');

const ElementList = require('../containers/ElementList.js');
const Validation = require('../containers/Validation');

module.exports = <div className="quizzContainer">
  <ElementList/>
  <Validation/>
</div>;
