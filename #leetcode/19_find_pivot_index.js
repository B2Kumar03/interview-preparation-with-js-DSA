var pivotIndex = function (nums) {
  let allSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
   
    if (leftSum === allSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));
