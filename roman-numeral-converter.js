const romanNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const arabicNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
let len = romanNumerals.length;

function convertToRoman(num) {
 let result = '';
 let i = 0;
 while(num > 0 && i < len) {
  if(num >= romanNumerals[i]) {
    let n = Math.floor(num/romanNumerals[i]);
    num = num%romanNumerals[i]
    while(n > 0) {
      result += arabicNumerals[i];
      n--;
    }
  }
  i++;
 }
 return result;
}

convertToRoman(36);