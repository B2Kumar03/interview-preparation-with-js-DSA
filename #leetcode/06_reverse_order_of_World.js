var reverseWords = function (s) {
  let stack = [];
  let world = "";
  let i = 0;
  while (i < s.length) {
    if (s[i] == " ") {
      if (world.length > 0) {
        stack.push(world);
        world = "";
      }
      i++;
    } else {
      world += s[i];
      i++;
    }
  }
  if (world.length > 0) {
    stack.push(world);
  }

  return stack.reverse().join(" ");
};

s = "a good example";
console.log(reverseWords(s));
