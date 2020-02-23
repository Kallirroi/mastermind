import React from "react";
import Row from './Row'
import Pegs from './Pegs'

import "../styles/GameArea.css";

function GameArea(props) {

  const rounds = props.rounds;
  const currentRound = props.currentRound;
  const roundHistory = props.roundHistory;
  const pegs = props.pegs;
  const currentCode = props.currentCode;
  return (
    <div className="gameArea">
      {rounds.map((round,i) => {     
        return (
          <div key={i} className='round'> 
            <Row roundHistory={roundHistory} currentCode={currentCode} played={i<currentRound ? true : false } active={i===currentRound ? true : false} /> 
            <Pegs pegs={pegs} played={i<currentRound ? true : false } active={i===currentRound ? true : false} /> 
          </div>) 
      })}
    </div>
  );
}

export default GameArea