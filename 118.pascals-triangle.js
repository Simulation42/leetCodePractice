/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (57.68%)
 * Likes:    3572
 * Dislikes: 160
 * Total Accepted:    582.2K
 * Total Submissions: 982.4K
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 * 
 * 
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= numRows <= 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let a = [[1]]
    let t = []
    let t2 = []
    for (let i = 1; i < numRows; i++) {
        t2 = []
        for (let j = Math.floor(i/2); j >= 0; j--) {
            if (j === 0) {
                t2.push(1);
                t2.unshift(1);
            } else { 
                if (i % 2 === 0 && j === Math.floor(i/2)) {
                    t2.push(t[j] + t[j-1])
                } else {
                    t2.push(t[j] + t[j-1])
                    t2.unshift(t[j] + t[j-1])
                }
            }
        }
        t = t2
        a.push(t2)
    }
    return a

    for (let i = 1; i < numRows; i++) {
        if ( i === 1 ) {
            a.push([1,1])
            t=[1,1]
        } else {
            t2 = []
        }
    }
};
// @lc code=end
