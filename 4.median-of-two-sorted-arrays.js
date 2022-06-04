/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [];

  while (nums1.length && nums2.length) {
    nums.push(nums1[0] < nums2[0] ? nums1.shift() : nums2.shift());
  }

  nums.push(...nums1, ...nums2);

  if (nums.length % 2 !== 0) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    const half = nums.length / 2;
    return (nums[half] + nums[half - 1]) / 2;
  }
};
// @lc code=end

