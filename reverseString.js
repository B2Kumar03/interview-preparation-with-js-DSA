function reverseStrign(length,string){
    if(length==0){
        return 0
    }
    reverseStrign(length-1,string)
    console.log(string[length]);
}
reverseStrign(5,'hello')