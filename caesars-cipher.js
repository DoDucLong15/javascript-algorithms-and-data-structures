function rot13(str) {
  const len = str.length;
  let result = '';
  for(let i=0; i<len; i++) {
    if(str[i].toUpperCase() === str[i].toLowerCase()) {
      result += str[i];
      continue;
    }
    const shifted = str.charCodeAt(i) - 13;
    if(shifted < 'A'.charCodeAt(0)) result += String.fromCharCode(shifted + 26);
    else result += String.fromCharCode(shifted);
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC"));