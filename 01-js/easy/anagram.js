/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1Sorted = [...str1.toLowerCase()].sort();
  let str2Sorted = [...str2.toLowerCase()].sort();
  if(str1Sorted.length > str2Sorted.length){
    let temp = str1Sorted;
    str1Sorted = str2Sorted;
    str2Sorted = temp;
  }
  for(let i=0; i<str1Sorted.length; i++){
    if(str1Sorted[i] != str2Sorted[i]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
