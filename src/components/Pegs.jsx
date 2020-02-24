import React from "react";

import "../styles/Pegs.css";

function Pegs(props) {
  
  const pegs = props.pegs;
  const history = props.history;
  const roundIndex = props.roundIndex;

  return (
    <div className='pegs'>
      {pegs.map((peg,i) => {    
	      let activeClass = 'peg active'

        let result;
        if (history[roundIndex] !== undefined && history[roundIndex][i] === 1) {
          result = 'black'
        }
        else if ( history[roundIndex] !== undefined  && history[roundIndex][i] === 0) {
          result = 'white'
        }

	      let playedClass = history[roundIndex] !== undefined ?  `peg played ${result}` : null  

	      let willPlayClass = 'peg willPlay';

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

export default Pegs