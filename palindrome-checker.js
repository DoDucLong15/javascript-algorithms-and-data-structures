function convert(str) {
  let res = '';
  for(const ch of str) {
    if((ch >= 'a' && ch <= 'z') 
      || (ch >= 'A' && ch <= 'Z') 
      || (ch >= '1' && ch <= '9')
    ) {
      res += ch;
    }
  }
  return res;
}

function palindrome(str) {
  str = convert(str.toUpperCase());
  const len = str.length;
  for(let i=0; i<Math.floor(len/2); i++) {
    if(str[i] !== str[len-1-i]) return false;
  }
  return true;
}

palindrome("eye");