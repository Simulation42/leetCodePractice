/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var number = 0;
    var arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "M" && arr[i-1] === "C") {
            number+=800;
        } else if (s[i] === "M") {
            number+=1000;
        }
        if (arr[i] === "D" && arr[i-1] === "C") {
            number+=300;
        } else if (arr[i] === "D") {
            number+=500;
        }
        if (arr[i] === "C" && arr[i-1] === "X") {
            number+=80;
        } else if (s[i] === "C") {
            number+=100;
        }
        if (arr[i] === "L" && arr[i-1] === "X") {
            number+=30;
        } else if (arr[i] === "L") {
            number+=50
        }
        if (arr[i] === "X" && arr[i-1] === "I") {
            number+=8;
        } else if (arr[i] === "X") {
            number+=10;
        }
        if (arr[i] === "V" && arr[i-1] === "I") {
            number+=3;
        } else if (arr[i] === "V") {
            number+=5;
        }
        if (arr[i] === "I") {
            number+=1;
        }
    }
    return number;
};
// @lc code=end

