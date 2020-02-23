import React from "react";

import "../styles/Row.css";

function Row(props) {

  const currentCode = props.currentCode;
  const roundHistory = props.roundHistory;

  return (
    <div className='row'>
    {currentCode.map((round, i) => {     
      console.log(roundHistory, roundHistory[0])
    	return props.active ? 
    			(
            props.played ?  
            (<div key={i} className={`choice played ${roundHistory[i]}`}></div>)
            :
            (<div key={i} className={`choice active ${currentCode[i]}`}></div>)
          ) 
    			:(<div key={i} className='choice willPlay'></div>) 
    })}
    </div>
  );
}

export default Row