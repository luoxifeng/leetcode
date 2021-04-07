/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = Math.pow(-2, 31)
    const max = Math.pow(2, 31) - 1

    let res = 0;
    while (x != 0) {
        let pop = x % 10;
        x = parseInt(x / 10)
        if (res > max/10 || (res == max / 10 && pop > 7)) return 0;
        if (res < min/10 || (res == min / 10 && pop < -8)) return 0;
        res = res * 10 + pop
    }
    return res;
};
// @lc code=end

