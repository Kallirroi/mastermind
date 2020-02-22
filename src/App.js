import React, {useState, useEffect } from "react";
import GameArea from './components/GameArea'
import Colors from './components/Colors'

import {initRounds, initComputerCode} from './Utils'

import "./styles/App.css";

function App() {

  // set random code (computer)
  const colors = ['M', 'B', 'Y', 'G', 'P', 'O'];
  let computerCode = initComputerCode(colors);

  // initialize rounds array
  let rounds = initRounds();

  // initialize current round
  let [currentRound, setCurrentRound] = useState(1);

  // initialize currentCode
  let  [currentCode, setCurrentCode]=useState(initComputerCode(colors));

  // initialize pegs
  let [pegs, setPegs] = useState([null, null, null, null])

  // detect color clicks on the Colors comp level
  function handleColorChoice(e) {
    let target = e;
    console.log(target)
  }
  
  // with every click, push one letter to currentCode

  useEffect( () => {
    if (currentRound < 10) {
      // choose four colors 

      // update colored blocks in row 

      // on submit we update pegs  

      // on clear we reset the choice 

    } 
    else {
      currentCode === computerCode ? alert('you won!') : alert('you lost :(');
      window.location.reload();
    }
  })

  return (
    <div className="App">
      <h1>Mastermind</h1>
      <p>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position. A white peg indicates the existence of a correct color code peg placed in the wrong position. More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.</p>
      <Colors onClick={handleColorChoice}/> 
      <div className='buttons'> 
        <button onClick={() => setCurrentCode([null, null, null, null]) }> Clear selection </button>
        <button onClick={() => setCurrentRound(currentRound+1) }> Submit </button>
      </div>      
      <GameArea currentCode={currentCode} rounds={rounds} currentRound={currentRound} pegs={pegs} />
    </div>
  );

}

export default App