/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums[0];
let count = 1;

for(i=1;i<nums.length;i++){
    if(majority === nums[i]){
        count+=1
    }else{
        count-=1;
        if(count === 0){
            majority = nums[i];
            count = 1;
        }
    }
}
return majority;
};