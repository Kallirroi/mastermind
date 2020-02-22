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
  let [currentRound, setCurrentRound] = useState(0);

  // initialize colorHistory
  let  [colorHistory, setColorHistory]=useState([null, null, null, null]);
  
  // initialize currentCode
  let  [currentCode, setCurrentCode]=useState(colorHistory);
  console.log(currentCode)

  // initialize pegs
  let [pegs, setPegs] = useState([null, null, null, null])

  const updateColorHistory = (color) => {
    debugger;
    return colorHistory.push(color);
  } 

  const updateCurrentCode = () => {
    let _colorHistory = colorHistory;
    return _colorHistory.splice(1,4);
  } 


  // detect color clicks on the Colors comp level
  const handleColorChoice = (e) => {
    // push one letter to currentCode and always keep the last four
    setColorHistory(updateColorHistory(e.target.id))
    setCurrentCode(updateCurrentCode);
    
    console.log(colorHistory, currentCode)
  }


  useEffect( () => {
    if (currentRound < 10) {

      // game logic with pegs

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
      <Colors handleColorChoice={handleColorChoice}/> 
      <div className='buttons'> 
        <button disabled={currentCode.includes(null)} onClick={() => setCurrentCode([null, null, null, null]) }> Clear selection </button>
        <button disabled={currentCode.includes(null)} onClick={() => {setCurrentRound(currentRound+1); setCurrentCode([null, null, null, null])} }> Submit </button>
      </div>      
      <GameArea currentCode={currentCode} rounds={rounds} currentRound={currentRound} pegs={pegs} />
    </div>
  );

}

export default App