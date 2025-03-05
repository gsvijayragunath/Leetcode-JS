/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let splittednum = x.toString().split("").reverse().join("")
    if (x === Number(splittednum)) {
        return true;
    } else {
        return false;
    }
};