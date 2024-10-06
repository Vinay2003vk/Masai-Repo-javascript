function reverseWord(str){
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
   }
   const result = reverseWord("JavaScript is fun");
   console.log(result);