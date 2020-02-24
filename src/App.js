import React, {useState, useEffect } from "react";
import GameArea from './components/GameArea'
import Colors from './components/Colors'

import {initArray, initComputerCode} from './Utils'

import "./styles/App.css";

function App() {

  // set random code (computer)
  const colors = ['M', 'B', 'Y', 'G', 'P', 'O'];
  let computerCode = initComputerCode(colors);

  // initialize rounds array
  const rounds = initArray(10);
  const pegs = initArray(4);

  // initialize current round
  let [currentRound, setCurrentRound] = useState(1);

  // initialize current color
  let [currentColor, setCurrentColor] = useState('');

  // initialize colorHistory
  let  [colorHistory, setColorHistory]=useState([null, null, null, null]);  

  // initialize roundHistory for colors and pegs
  let  [roundHistory, setRoundHistory]=useState({colors: [], pegs: []});
  
  // initialize currentCode
  let  [currentCode, setCurrentCode]=useState([null, null, null, null]);

  const updateColorHistory = () => {
    if (colorHistory !== undefined && currentColor !== "") colorHistory.push(currentColor);
    return colorHistory
  }   

  const updateRoundHistory = () => {
    // update colors 
    roundHistory.colors.push(currentCode);

    // update pegs 
    roundHistory.pegs.push([1,0,0,1]);

    return roundHistory;
  } 

  const updateCurrentCode = () => {
    let lastFour=colorHistory.slice(-4).reverse();
    if (lastFour.length===4) return lastFour;
  } 

  const updatePegs = () => {
    // peg logic here
  }

  // detect color clicks on the Colors comp level
  const handleColorChoice = (e) => {
    // push one letter to currentCode and always keep the last four
    if (e.target.id !== "") setCurrentColor(e.target.id)
  }

  const handleClear = () => {
    setCurrentColor(''); 
    setColorHistory([null, null, null, null]); 
    setCurrentCode([null, null, null, null]);
  }

  const handleSubmit = () => {
    setCurrentColor(''); 
    setCurrentRound(currentRound+1); 
    setRoundHistory(updateRoundHistory);
    setColorHistory([null, null, null, null]);
    setCurrentCode([null, null, null, null]);
  }

  // isolate effects on currentColor 
  useEffect( () => {
      // update color history 
      setColorHistory(updateColorHistory);

      // update current code
      setCurrentCode(updateCurrentCode);
    },
    [currentColor]
  );  


  // isolate effects on currentRound 
  useEffect( () => {

      // check for victory or loss after we have played all rounds
      if (currentRound > 10)  {
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
        <button 
          disabled={currentColor === ''} 
          onClick={handleClear}> 
          Clear selection 
        </button>
        <button 
          disabled={currentCode.includes(null)} 
          onClick={handleSubmit}> 
          Submit 
        </button>
      </div>      
      
      <GameArea 
      roundHistory={roundHistory} 
      currentCode={currentCode} 
      rounds={rounds} 
      pegs={pegs}
      currentRound={currentRound}/>
    </div>
  );

}

export default App