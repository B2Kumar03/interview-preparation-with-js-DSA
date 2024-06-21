var productExceptSelf = function(nums) {
    let left=new Array(nums.length).fill(1)
    let right=new Array(nums.length).fill(1)
    //left
    for(let i=1;i<nums.length;i++){
        left[i]=left[i-1]*nums[i-1]

    }
    //right
    for(let i=nums.length-2;i>=0;i--){
        right[i]=right[i+1]*nums[i+1]
    }
    let result=[]
    for(let i=0;i<nums.length;i++){
        result.push(left[i]*right[i])
    }
    return result
};


nums = [1,2,3,4]   
console.log(productExceptSelf(nums));

//left [1,2,6,24]