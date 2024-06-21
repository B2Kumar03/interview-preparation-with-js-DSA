var isSubsequence = function (s, t) {
  let sindex = 0;
  let tindex = 0;
  if (s.length == 0) {
    return true;
  }
  while (tindex < t.length) {
    if (s[sindex] === t[tindex]) {
      sindex++;
      if (sindex === s.length) {
        return true;
      }
    }
    tindex++;
  }
  return false;
};

let s = "";
let t = "ahbgdc";

console.log(isSubsequence(s, t));
