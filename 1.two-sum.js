/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var compPair = target - value;
        if(map[compPair] !== undefined) {
            return [map[compPair], i];
        } else {
            map[value] = i;
        }
    }
};
// @lc code=end

