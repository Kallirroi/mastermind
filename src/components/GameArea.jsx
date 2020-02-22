import React from "react";
import Row from './Row'
import Pegs from './Pegs'

import "../styles/GameArea.css";

function GameArea(props) {

  const rounds = props.rounds;
  const currentRound = props.currentRound;
  const pegs = props.pegs;
  const currentCode = props.currentCode;

  return (
    <div className="gameArea">
      {rounds.map((round, i) => {     
        return (
          <div key={i} className='round'> 
            <Row currentCode={currentCode} active={i===currentRound ? true : false} /> 
            <Pegs pegs={pegs} active={i===currentRound ? true : false} /> 
          </div>) 
      })}
    </div>
  );
}

export default GameArea