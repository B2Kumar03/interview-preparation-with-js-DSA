
const reverseStringRecursive=(str)=>{
    if(str.length===0){
        return ""
    }
    
    return str[str.length-1]+reverseStringRecursive(str.slice(0,str.length-1))
}





const str="Hello"

console.log(reverseStringRecursive(str));
