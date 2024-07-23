/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -1;
    let left = 0;
    let right = height.length - 1;

while (left < right) {
    let len = right - left;
    let current = Math.min(height[left], height[right]) * len;
    max = Math.max(current, max);
    if (height[left] < height[right]) {
        left++;
    } else {
        right--;
    }
}
    return max;
};