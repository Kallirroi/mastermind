import React from "react";

import "../styles/Pegs.css";

function Pegs(props) {
  
  const pegsClass= props.active || props.played ? 'pegs active' : 'pegs'
  const pegs = props.pegs;

  return (
    <div className='pegs'>
      {pegs.map((peg,i) => {    
	      let activeClass = 'peg active'
	      
	      let playedClass = 'peg played'    


	      let willPlayClass = 'peg willPlay'

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