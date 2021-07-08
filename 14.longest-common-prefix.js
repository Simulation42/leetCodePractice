/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0]
    if (strs.every((string) => string === strs[0])) return strs[0]
    for (var i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0]. slice(0,i);
        }

    }
};
// @lc code=end

