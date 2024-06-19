// const sumArr=(arr)=>{
//     if(arr.lenght===0){
//         return 0
//     }
//     return arr[arr.lenght-1] + sumArr(arr.slice(0,arr.lenght-1))
// }

// const arr=[1,2,3,4,5]
// console.log(sumArr(arr));
const sumArr = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    return arr[arr.length - 1] + sumArr(arr.slice(0, arr.length - 1));
}

const arr = [1, 2, 3, 4, 5];
console.log(sumArr(arr)); // Output: 15


 
