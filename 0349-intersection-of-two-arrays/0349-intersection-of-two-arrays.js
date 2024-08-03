/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = [];
    for(i=0;i<nums1.length;i++){
    if(nums2.includes(nums1[i])){
    res.push(nums1[i])
  }
}
return  Array.from(new Set(res));
};