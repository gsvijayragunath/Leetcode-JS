/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let maximum = 0;
    let count = 0;
    let n = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === n) {
            count++;
        }else{
            maximum = Math.max(count, maximum);
            count = 0;
        }
    }
    maximum = Math.max(maximum, count);
    return maximum;
    };