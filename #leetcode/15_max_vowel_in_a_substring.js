var maxVowels = function (s, k) {
  let vowel = new Set(["a", "e", "i", "o", "u"]);
  let vowelCount=0
  let maxCount=0
  for(let i=0;i<k;i++){
    if(vowel.has(s[i])) vowelCount++
  }
  maxCount=vowelCount
  for(let i=k;i<s.length;i++){
    if(vowel.has(s[i]))vowelCount++
    if(vowel.has(s[i-k]))vowelCount--
    maxCount=Math.max(maxCount,vowelCount)
  }
  return maxCount
};

let s = "abciiidef"
let  k = 3;
console.log(maxVowels(s,k));
