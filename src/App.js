import React, {useState } from "react";
import GameArea from './components/GameArea'
import Colors from './components/Colors'

import "./styles/App.css";

function App() {

  // set random code (computer)

  // initialize round and row
  let rounds=[1];
  for (var i = 8; i >= 0; i--) {
    rounds.push(0);
  }


  let currentRound=1;

  // initialize currentChoice

  // initialize pegs

  // detect color clicks 
    // set currentChoice for this round


  // listen for button click
  function handleSubmit(e) {
    console.log(e.target)
  }

  // update pegs

  return (
    <div className="App">
      <h1>Mastermind</h1>
      <p>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position. A white peg indicates the existence of a correct color code peg placed in the wrong position. More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.</p>
      <Colors /> 
      <button type='submit' onClick={handleSubmit}> Submit </button>
      <GameArea rounds={rounds} currentRound={currentRound} />
    </div>
  );

}

export default App