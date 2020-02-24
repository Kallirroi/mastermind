export const initRounds = () => { 
  let rounds=[1];
  for (var i = 9; i > 0; i--) {
    rounds.push(0);
  }
  return rounds
}

export const initComputerCode = (colors) => {
  var result=[];
  for (var i=0; i<4; ++i) {
    result[i] = colors[Math.floor(Math.random() * colors.length)];
  } 
  return result;
}