'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./pathway-list.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PathwayList = function PathwayList(props) {

  return _react2.default.createElement(
    'div',
    { className: 'pathway-list' },
    _react2.default.createElement(
      'ul',
      { className: 'pathway-list__pathwaylist' },
      props.children
    )
  );
};
exports.default = PathwayList;
module.exports = exports['default'];