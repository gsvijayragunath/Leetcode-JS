/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let sum = original;
    while(nums.includes(sum)){
            sum *= 2
    }
    return sum;
};