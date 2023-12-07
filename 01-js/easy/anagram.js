/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len1 = str1.length , len2 = str2.length; 
  str1 = str1.toLowerCase(); 
  str2 = str2.toLowerCase(); 
  if(len1 != len2 )return false ; 
  let map = new Map();
  for(let i = 0 ; i< len1 ; ++i) {
    if(map.has(str1[i])){
      map.set(str1[i], map.get(str1[i]) + 1 ); 
    }
    else{
      map.set(str1[i], 1); 
    }
  }
  for(let i = 0 ; i< len1 ; ++i) {
    if(map.has(str2[i])){
      map.set(str2[i], map.get(str2[i]) - 1 ); 
    }
  }
  let keys = map.keys();
  for(let key of keys ){
    if(map.get(key) != 0 ) return false;
  }
  return true ; 

}

module.exports = isAnagram;
