function countVowelsAndConsonants(str) {
    let VowelsCount = 0;
    let ConsonantsCount = 0;
    
    const vowels = "aeiouAEIOU";
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    for(let char of str){
      if (vowels.includes(char)){
        VowelsCount++
      }
      else if (consonants.includes(char)){
        ConsonantsCount++;
      }
    }
    
    return {
      vowels: VowelsCount,
      consonants: ConsonantsCount
    };
   }
  const result = countVowelsAndConsonants("Hello,World")
  console.log(result)
