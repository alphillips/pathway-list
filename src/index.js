import React from 'react';

import './pathway-list.css'

const PathwayList = (props) => {

  return (
    <div className="pathway-list">
      <ul className="pathway-list__pathwaylist">
      {props.children}
      </ul>
    </div>
  )
}
export default PathwayList
