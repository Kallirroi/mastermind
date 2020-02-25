import React, {useState, useEffect } from "react";
import GameArea from './components/GameArea'
import Colors from './components/Colors'

import {initArray, initComputerCode, pegsLogic} from './Utils'

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
  const [currentRound, setCurrentRound] = useState(1);

  // initialize current color
  const [currentColor, setCurrentColor] = useState('');

  // initialize colorChoices
  const  [colorChoices, setColorChoices]=useState([null, null, null, null]);  

  // initialize roundHistory for colors and pegs
  const  [roundHistory, setRoundHistory]=useState({colors: [], pegs: []});
  
  // initialize currentCode
  const  [currentCode, setCurrentCode]=useState([null, null, null, null]);  

  const [didClickButton, setDidClickButton] = useState(false);
  
  const updateColorChoices = () => {
    if (colorChoices !== undefined && currentColor !== "") colorChoices.push(currentColor);
    return colorChoices
  }   

  const updateRoundHistory = () => {
   
    // update color history
    roundHistory.colors.push(currentCode);

    // update pegs history using the rules of the game
    let result = pegsLogic(currentCode, computerCode);
    roundHistory.pegs.push(result);
    
    // check if the user has found the correct code
    if (result === [1,1,1,1]) winFlag = true;
    
    return roundHistory;
  } 

  const updateCurrentCode = () => {
    let lastFour=colorChoices.slice(-4);
    if (lastFour.length===4) return lastFour;
  } 

  const handleClear = () => {
    setCurrentColor(''); 
    setColorChoices([null, null, null, null]); 
    setCurrentCode([null, null, null, null]);
  }

  const handleSubmit = () => {
    setCurrentColor(''); 
    setCurrentRound(currentRound+1); 
    setRoundHistory(updateRoundHistory);
    setColorChoices([null, null, null, null]);
    setCurrentCode([null, null, null, null]);
  }


  const buttonClickHandler = () => {
    setDidClickButton(true)
  }

  const mouseClickHandler = (e) => {
    e.preventDefault();
    // push one letter to currentCode and always keep the last four
    if (e.target.id !== "") setCurrentColor(e.target.id);
    setDidClickButton(false) // If you want to reset the behavior again
  }

  // isolate clicking effects
  useEffect(() => {

    if (didClickButton) {
      document.addEventListener("click", mouseClickHandler)
      
      // update current code
      setCurrentCode(updateCurrentCode);

      // update color history 
      setColorChoices(updateColorChoices);
      
      console.log(currentColor, currentCode)

      return () => {
        document.removeEventListener("click", mouseClickHandler)
      }
    } else {
      document.removeEventListener("click", mouseClickHandler)
    }
  }, [didClickButton])   


  // isolate effects on currentRound 
  useEffect( () => {
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
      <p>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a black peg is placed for each code peg from the guess which is correct in both color and position. A white peg indicates the existence of a correct color code peg placed in the wrong position. More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.</p>

      <Colors handleColorChoice={buttonClickHandler} colors={colors}/> 
      
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

      <div className='credits'>Made by <a href="kalli-retzepi.com">Kalli</a> during her time at the <a href="https://www.recurse.com/">Recurse Center</a>.</div>
    </div>
  );

}

export default App