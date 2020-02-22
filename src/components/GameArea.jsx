import React from "react";
import Row from './Row'
import Pegs from './Pegs'

import "../styles/GameArea.css";

function GameArea(props) {

  const rounds = props.rounds;
  const currentRound = props.currentRound;

  return (
    <div className="gameArea">
      {rounds.map((round, i) => {      
        return (<div key={i} className="round"> <Row active={round===currentRound? true : false} /> <Pegs active={round===currentRound? true : false} /> </div>) 
      })}
    </div>
  );
}

export default GameArea