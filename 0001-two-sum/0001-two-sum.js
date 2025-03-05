/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = new Map();

    for(let i =0;i<nums.length;i++){
    let complement = target -  nums[i];
        if(hashmap.has(complement)){
            return [hashmap.get(complement),i]
        }
        hashmap.set(nums[i],i)
    }
    return []
};