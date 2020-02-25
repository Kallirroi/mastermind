import React, {useState, useEffect } from "react";
import GameArea from './components/GameArea'
import Colors from './components/Colors'

import {initArray, initComputerCode, pegsLogic} from './Utils'

import "./styles/App.css";


// set random code (computer)
const colors = ['M', 'B', 'Y', 'G', 'P', 'O'];
const computerCode = initComputerCode(colors);
console.log(computerCode)
// initialize rounds and pegs arrays
const rounds = initArray(10);
const pegs = initArray(4);

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

  // handle button click detection
  const [didClickButton, setDidClickButton] = useState(false);

  // handle win detection
  const [winFlag, setWinFlag] = useState(false);
  
  const updateColorChoices = () => {
    if (colorChoices !== undefined && currentColor !== "") colorChoices.push(currentColor);
    return colorChoices
  }   

  const updateRoundHistory = () => {
   
    // update color history
    roundHistory.colors.push(currentCode);

    // update pegs history using the rules of the game
    let result = pegsLogic(currentCode, computerCode);

    // check if the user has found the correct code -- I KNOW THIS IS NOT CLEAN
    if (JSON.stringify(result) === JSON.stringify([1,1,1,1])) setWinFlag(true);

    roundHistory.pegs.push(result);
    
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


  const buttonClickHandler = (e) => {
    e.preventDefault();
    
    // trigger useEffect on didClickButton    
    setDidClickButton(true);
    
    // save the chosen letter to currentColor array
    if (e.target.id !== "") setCurrentColor(e.target.id);
  }


  // isolate clicking effects
  useEffect(() => {

    if (didClickButton) {
      // update current code
      setCurrentCode(updateCurrentCode);
      
      // update color history 
      setColorChoices(updateColorChoices);  
      
      // reset didClickButton variable
      setDidClickButton(false);
    }
  }, [didClickButton])   


  // isolate effects on currentRound 
  useEffect( () => {
      // check for victory or loss after we have played all rounds
      console.log('winflag', winFlag)
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

  const gameStatus = winFlag ? 'win' : 'play'

  return (
    <div className={gameStatus}>
      <div className='App'>
        <h1>Mastermind</h1>
        <p>Try to guess the pattern, in both order and color, within ten turns. After submitting a row, a black peg indicates a guess which is correct in both color and position. A white peg indicates a guess which is correct about the color but wrong about the position. More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)" target='_blank'>Wikipedia</a>.</p>

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

        <div className='credits'>Made by <a href="https://kalli-retzepi.com/" target='_blank'>Kalli</a> during her time at the <a href="https://www.recurse.com/" target='_blank'>Recurse Center</a>.</div>
      </div>
    </div>
  );

}

export default App