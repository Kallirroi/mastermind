import React from "react";
import Row from './Row'
import Pegs from './Pegs'

import "../styles/GameArea.css";

function GameArea(props) {

  const rounds = props.rounds;
  const pegs = props.pegs;
  const currentRound = props.currentRound;
  const roundHistory = props.roundHistory;
  const currentCode = props.currentCode;
  const currentPegScore = props.currentPegScore;
  
  return (
    <div className="gameArea">
      {rounds.map((round,i) => {     

        let played =  i < currentRound-1 ? true : false;
        let active =  i === currentRound-1 ? true : false;

        return (
          <div key={i} className={'round'}> 
            <Row 
              roundIndex={i}
              history={roundHistory.colors} 
              currentCode={currentCode}
              played={played} 
              active={active} /> 
            <Pegs 
              pegs={pegs}
              roundIndex={i}
              history={roundHistory.pegs} 
              currentPegScore={currentPegScore}
              played={played} 
              active={active} /> 
          </div>) 
      })}
    </div>
  );
}

export default GameArea