import React from "react";

import "../styles/Row.css";

function Row(props) {

  const currentCode = props.currentCode;
  const roundHistory = props.roundHistory;
  const currentRound = props.currentRound;
  const roundIndex = props.roundIndex;
  console.log(currentRound, roundIndex)
  return (
    <div className='row'>
    {currentCode.map((round, i) => {     
      let activeClass = `choice active ${currentCode[i]}` 
      let playedClass = roundHistory[roundIndex] !== undefined ? `choice played ${roundHistory[roundIndex][i]}` : null

      let willPlayClass = 'choice willPlay'

    	return props.active ? 
          <div key={i} className={activeClass}></div>
    			:
          (
            props.played ?  
            (<div key={i} className={playedClass}></div>)
            :
            (<div key={i} className={willPlayClass}></div>)
          ) 
    })}
    </div>
  );
}

export default Row