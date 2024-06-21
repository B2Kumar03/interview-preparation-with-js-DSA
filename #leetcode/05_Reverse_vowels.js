var reverseVowels = function(s) {
    const vowels=new Set("aeiouAEIOU")
    let i=0
    let j=s.length-1
    let ns=s.split("")
    while(i<j){
        if(vowels.has(ns[i]) && vowels.has(ns[j])){
            [ns[i],ns[j]]=[ns[j],ns[i]]
            i++;
            j--
        }
        else if(vowels.has(ns[i])){
            j--
        }
        else{
            i++;
        }
    }
    return ns.join('')
};
console.log(reverseVowels("hello"));

