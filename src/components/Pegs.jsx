import React from "react";

import "../styles/Pegs.css";

function Pegs(props) {
  
  const pegsClass= props.active || props.played ? 'pegs active' : 'pegs'
  const pegs = props.pegs;

  return (
    <div className={pegsClass}>
      {pegs.map((peg,i) => {      
        return (<div key={i} className={`peg ${peg}`}></div>) 
      })}
    </div>
  );
}

export default Pegs