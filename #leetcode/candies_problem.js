/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let mx_candies = candies[0]
    let result = []
    for (let i = 0; i < candies.length; i++) {
        if (mx_candies < candies[i]) {
            mx_candies = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= mx_candies) {
            result.push(true)
        }
        else {
            result.push(false)
        }
    }
    return result
};