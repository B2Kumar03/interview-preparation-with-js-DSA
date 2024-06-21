



var moveZeroes = function(nums) {
    let left=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]!==0){
            nums[left]=nums[right]
            left++
        }
    }
    for(let i=left;i<nums.length;i++){
        nums[i]=0
        };
    return nums
};

nums = [0,1,0,3,12]
console.log(moveZeroes(nums));