


var longestSubarray = function(nums) {
    let zeroCount=0
    let maxLen=0
    let left=0
    for(let right=0;right<nums.length;right++){
        if(nums[right]==0){
            zeroCount++
        }
        while(zeroCount>1){
            if(nums[left]==0){
                zeroCount--
            }
            left++
        }
        if(zeroCount===1){
            maxLen=Math.max(maxLen,right-left)
        }
    }
    return zeroCount===0 ?nums.length-1 :maxLen
};


let nums = [0,1,1,1,0,1,1,0,1]

console.log(longestSubarray(nums));