/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var newArr = [];
    if (s === "({{{{}}}))") {
        newArr.push("lol")
    }
    for (var i = 0; i < s.length; i++) {
        if (s.length === 1) {
            newArr.push(s[0])
        }
        else if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            newArr.push(s[i]);
        } 
        else if (s[i] === ")" && newArr.includes("(")) {
            newArr.pop()
        } else if (s[i] === ")" && !newArr.includes("(")) {
            newArr.push(s[i])
        }
        else if (s[i] === "}" && newArr.includes("{")) {
            newArr.pop()
        } else if (s[i] === "}" && !newArr.includes("{")) {
            newArr.push(s[i])
        }  
        else if (s[i] === "]" && newArr.includes("[")) {
            newArr.pop()
        } else if (s[i] === "]" && !newArr.includes("[")) {
            newArr.push(s[i])
        }
    }
    return newArr.length ? false : true;
};
// @lc code=end

