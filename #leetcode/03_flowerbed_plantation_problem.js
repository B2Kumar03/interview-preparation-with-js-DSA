/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    if(flowerbed.length==n && flowerbed[0]==0 && n==1){
        return true
    }
    if (flowerbed[0] == 0 && flowerbed[1] == 0) {
        flowerbed[0] = 1
        count += 1
    }
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
            flowerbed[i] = 1
            count += 1
        }
    }
    if (flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0) {
        flowerbed[flowerbed.length - 1] = 1
        count += 1
    }
    return count>=n

};