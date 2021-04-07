/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (39.24%)
 * Likes:    1550
 * Dislikes: 0
 * Total Accepted:    489.2K
 * Total Submissions: 1.2M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 0 
 * strs[i] 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var first = strs[0] || ''
  let res = '', has = true;
  for (var i = 0; i < first.length; i++) {
    var char = first[i];
    has = true;
    for (var j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        has = false;
        break;
      }
    }
    if (has) {
      res += char
    } else {
      break
    }
  }
  return res;
};

longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])

// @lc code=end

