'use strict';

const {connect} = require('react-redux');
const ElementList = require('../components/ElementList.jsx');

const mapStateToProps = (state) => {
  return {
    elements: state.elements.map(element => {
      return {
        id: element.id,
        type: element.type,
        data: state[element.type].byId[element.id]
      };
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ElementList);

