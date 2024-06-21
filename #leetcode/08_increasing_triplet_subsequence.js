var increasingTriplet = function (nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      return true;
    }
  }
  return false;
};

// let nums = [1,2,3,4,5]
let nums = [20, 100, 10, 12, 5, 13];

console.log(increasingTriplet(nums));
