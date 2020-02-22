import React from "react";

import "../styles/Pegs.css";

function Pegs(props) {
  
  const pegsClass= props.active ? 'pegs active' : 'pegs'

  return (
    <div className={pegsClass}>
      <div className='peg'></div>
      <div className='peg'></div>
      <div className='peg'></div>
      <div className='peg'></div>
    </div>
  );
}

export default Pegs