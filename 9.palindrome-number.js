/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    var og = x;
    var temp = 0;
        
    while (x > 0) {
        temp = (temp * 10) + (x%10);
        x = parseInt(x/10);
    }
    return temp == og;
}

// @lc code=end

