/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let margeStr = ""
    let i = 0
    let j = 0
    let n1 = word1.length
    let n2 = word2.length

    while (i < n1 && j < n2) {
        margeStr += word1[i]
        margeStr += word2[j]
        i += 1
        j += 1
    }

    while (i < n1) {
        margeStr += word1[i]
        i += 1
    }
    while (j < n2) {
        margeStr += word2[j]
        j += 1
    }
    return margeStr
};