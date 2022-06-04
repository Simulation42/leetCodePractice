/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (48.02%)
 * Likes:    3391
 * Dislikes: 400
 * Total Accepted:    672K
 * Total Submissions: 1.4M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let c = ""
    while (a.length && b.length) {
        if (a[a.length - 1] + b[b.length - 1] === 2) {
            c.shift(0)
            a.pop();
            b.pop();
            if (a.length) {
                a[a.length -1]++
            } else if (b.length) {
                b[b.length -1]++
            } else {
                c.shift(1)
            }
        }
        if (a[a.length - 1] + b[b.length - 1] < 2) {
            c.shift(a[a.length - 1] + b[b.length - 1])
            a.pop()
            b.pop()
        }
        if (!a && b) {
            c.shift(b[b.length - 1]);
            b.pop()
        } else if (a && !b) {
            c.shift(a[a.length - 1])
            a.pop()
        }
    }
    return c;
};
// @lc code=end

