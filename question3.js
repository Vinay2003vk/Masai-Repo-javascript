function isPalindrome(str){
  
    let cleanedstr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleanedstr === cleanedstr.split('').reverse().join('');
  }
  const result = isPalindrome("A man, a plan, a canal, Panama");
  console.log(result);