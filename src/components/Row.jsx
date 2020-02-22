import React from "react";

import "../styles/Row.css";

function Row(props) {

  const rowClass= props.active ? 'row active' : 'row'
 
  return (
    <div className={rowClass}>
    	<div className='choice'></div>
    	<div className='choice'></div>
    	<div className='choice'></div>
    	<div className='choice'></div>
    </div>
  );
}

export default Row