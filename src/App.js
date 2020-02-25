import React, {useState, useEffect } from "react";
import GameArea from './components/GameArea'
import Colors from './components/Colors'

import {initArray, initComputerCode} from './Utils'

import "./styles/App.css";


// set random code (computer)
const colors = ['M', 'B', 'Y', 'G', 'P', 'O'];
const computerCode = initComputerCode(colors);

// initialize rounds and pegs arrays
const rounds = initArray(10);
const pegs = initArray(4);

// detect win
let winFlag = false;

function App() {

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
   
    // update color history
    roundHistory.colors.push(currentCode);

    // update pegs history 
    let result=[null,null,null,null];

    for (var i = 0; i < currentCode.length; i++) {
      let isColorIncluded = computerCode.includes(currentCode[i]);

      if (isColorIncluded) { 
        if ( currentCode[i] === computerCode[i]) {
          result[i]=1;
          }
        else {
          result[i]=0;
        }
      }
    }
    roundHistory.pegs.push(result);
    if (result === [1,1,1,1]) winFlag = true;
    return roundHistory;
  } 

  const updateCurrentCode = () => {
    let lastFour=colorHistory.slice(-4);
    if (lastFour.length===4) return lastFour;
    
    return lastFour
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
      console.log(roundHistory.pegs[currentRound-1])
      // check for victory or loss after we have played all rounds
      if (winFlag) {
        alert('you won!')
        window.location.reload();
      }

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
      <p>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a grey peg is placed for each code peg from the guess which is correct in both color and position. A blue peg indicates the existence of a correct color code peg placed in the wrong position. More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.</p>
      
      <Colors handleColorChoice={handleColorChoice} colors={colors}/> 
      
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