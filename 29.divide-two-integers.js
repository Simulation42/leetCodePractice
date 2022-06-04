/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (16.98%)
 * Likes:    2160
 * Dislikes: 7841
 * Total Accepted:    404.5K
 * Total Submissions: 2.4M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division, and mod operator.
 * 
 * Return the quotient after dividing dividend by divisor.
 * 
 * The integer division should truncate toward zero, which means losing its
 * fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) =
 * -2.
 * 
 * Note: Assume we are dealing with an environment that could only store
 * integers within the 32-bit signed integer range: [−2^31, 2^31 − 1]. For this
 * problem, assume that your function returns 2^31 − 1 when the division result
 * overflows.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: dividend = 10, divisor = 3
 * Output: 3
 * Explanation: 10/3 = truncate(3.33333..) = 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: dividend = 7, divisor = -3
 * Output: -2
 * Explanation: 7/-3 = truncate(-2.33333..) = -2.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: dividend = 0, divisor = 1
 * Output: 0
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: dividend = 1, divisor = 1
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * -2^31 <= dividend, divisor <= 2^31 - 1
 * divisor != 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var cn = 0
    var cnt = 0
    var isNeg = false
    if (divisor < 0 ) {
        divisor = divisor - divisor - divisor
        isNeg = !isNeg
    }
    if (dividend < 0 ) {
        dividend = dividend - dividend - dividend
        isNeg = !isNeg
    }
    if (dividend === 0) {
        return 0
    }
    while (cn <= dividend) {
        if (isNeg) {
            cnt--
            cn = cn+divisor
        } else {
            cnt++
            cn = cn+divisor
        }
    }
    if (cn > 2147483647) {
        return 2147483647
    } else if (cn < -2147483647) {
        return -2147483647
    }
    if (isNeg) {
        return cnt + 1
    } else {
        return cnt - 1
    }
};
// @lc code=end

