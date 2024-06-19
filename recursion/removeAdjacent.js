const marge=(str,char)=>{
    console.log(str,char);
}


const removeAdjacent=(str)=>{
    if(str.length===0){
        return ""
    }
    
    return removeAdjacent(str.slice(0,str.length-1))+str[str.length-1]
    marge(st,str[str.length-1])
}
str="Hello"
console.log(removeAdjacent(str));