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

  let [currentColor, setCurrentColor] = useState('');

  // initialize colorHistory
  let  [colorHistory, setColorHistory]=useState([null, null, null, null]);
  
  // initialize currentCode
  let  [currentCode, setCurrentCode]=useState([null, null, null, null]);

  // initialize pegs
  let [pegs, setPegs] = useState([null, null, null, null])

  const updateColorHistory = () => {
    if (colorHistory !== undefined && currentColor !== "") colorHistory.push(currentColor);
    return colorHistory
  } 

  const updateCurrentCode = () => {
    let lastFour=colorHistory.slice(-4).reverse()
    console.log(lastFour)
    if (lastFour.length===4) return lastFour;
  } 

  // detect color clicks on the Colors comp level
  const handleColorChoice = (e) => {
    // push one letter to currentCode and always keep the last four
    if (e.target.id !== "") setCurrentColor(e.target.id)
  }

  // isolate effects on currentColor change
  useEffect( () => {
      // update color history 
      setColorHistory(updateColorHistory);

      // update current code
      setCurrentCode(updateCurrentCode);
    },
    [currentColor],
  );


  // isolate effects on currentRound change
  useEffect( () => {
      if (currentRound < 10) {
        
      } 
      else {
        currentCode === computerCode ? alert('you won!') : alert('you lost :(');
        window.location.reload();
      }
    },
    [currentRound]
  )

  return (
    <div className="App">
      <h1>Mastermind</h1>
      <p>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both color and position. A white peg indicates the existence of a correct color code peg placed in the wrong position. More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.</p>
      <Colors handleColorChoice={handleColorChoice}/> 
      <div className='buttons'> 
        <button disabled={currentCode.includes(null)} 
          onClick={() => {setCurrentColor(''); setColorHistory([null, null, null, null]); setCurrentCode([null, null, null, null])} }> 
          Clear selection 
        </button>
        <button disabled={currentCode.includes(null)} 
          onClick={() => {setCurrentRound(currentRound+1); setCurrentCode([null, null, null, null])} }> 
          Submit 
        </button>
      </div>      
      <GameArea currentCode={currentCode} rounds={rounds} currentRound={currentRound} pegs={pegs} />
    </div>
  );

}

export default App