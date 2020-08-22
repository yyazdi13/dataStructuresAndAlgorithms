// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
    let hash = {};
    for (char of s){
    hash[char] = hash[char] +1 || 1;
        
    }
    
console.log(hash)
    
    for (let i = 0; i < s.length; i++){
        if (hash[s[i]] === 1) {
            return i;
        };
    }
    
    return -1;

}

console.log(firstUniqChar("dddccdbba"));