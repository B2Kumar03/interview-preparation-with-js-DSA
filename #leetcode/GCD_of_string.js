/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings1(str1,str2){
    if (str2.length == 0) {
    return str1
}

return gcdOfStrings1(str2, str1.slice(0, str1.length % str2.length))
}
var gcdOfStrings = function (str1, str2) {
if(str1+str2!=str2+str1){
    return ""
}
return gcdOfStrings1(str1,str2)

};