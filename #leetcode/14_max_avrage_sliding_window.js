var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;
  let i = 0;
  let j = k;

  while (i < nums.length && j < nums.length) {
    sum = sum - nums[i] + nums[j];
    max = Math.max(max, sum);
    i++;
    j++;
  }
  return max / k;
};

let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k));
