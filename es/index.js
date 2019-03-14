import React from 'react';

import './pathway-list.css';

var PathwayList = function PathwayList(props) {

  return React.createElement(
    'div',
    { className: 'pathway-list' },
    React.createElement(
      'ul',
      { className: 'pathway-list__pathwaylist' },
      props.children
    )
  );
};
export default PathwayList;