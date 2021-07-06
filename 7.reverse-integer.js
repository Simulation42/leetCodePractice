/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = parseFloat(
        x.toString().split('').reverse().join('')
    ) * Math.sign(x)

    if (num > 2147483647 || num < -2147483647) {
        return 0
    } else {
        return num;
    }
        
};
// @lc code=end

