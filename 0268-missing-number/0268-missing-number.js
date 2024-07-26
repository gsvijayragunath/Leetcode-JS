/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    return finalValue  = (n*(n+1))/2 - nums.reduce((acc,curr) => acc + curr)
};