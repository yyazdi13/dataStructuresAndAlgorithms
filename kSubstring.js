 // counts number of unique characters in a given string 
 function countUniqueCharacters(str) {
    var uniqueChars = new Set();
    for(var c of str) {
      uniqueChars.add(c);
    }
    return uniqueChars.size; 
  }
  
  //countUniqueCharacters('aaabccc')
  
  function KUniqueCharacters(str, k) {
      // iterate with the substring with a size of (subStrSize)
      for (var subStrSize = str.length; subStrSize > 0; subStrSize--) {
          // pick a position to start with
          for (var i = 0; i <= str.length - subStrSize; i++) {
              var subStr = str.slice(i, i + subStrSize);
              
              if (countUniqueCharacters(subStr) === k) {
                  return subStr;
              }
          }
      }
  }

console.log(KUniqueCharacters('abaabad',2));