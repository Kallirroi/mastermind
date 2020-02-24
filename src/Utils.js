export const initArray = (number) => { 
  let array=[1];
  for (var i = number-1; i > 0; i--) {
    array.push(0);
  }
  return array
}

export const initComputerCode = (colors) => {
  var result=[];
  for (var i=0; i<4; ++i) {
    result[i] = colors[Math.floor(Math.random() * colors.length)];
  } 
  return result;
}