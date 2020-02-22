import React from "react";

import "../styles/Row.css";

function Row(props) {

  const rowClass = props.active ? 'row active' : 'row';
  const currentCode = props.currentCode;
 
  return (
    <div className={rowClass}>
    {currentCode.map((round, i) => {     
    	return props.active ? 
    			(<div key={i} className={`choice ${currentCode[i]}`}></div>) 
    			:(<div key={i} className='choice'></div>) 
    })}
    </div>
  );
}

export default Row