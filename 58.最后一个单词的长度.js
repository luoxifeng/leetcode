/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (34.23%)
 * Likes:    300
 * Dislikes: 0
 * Total Accepted:    173K
 * Total Submissions: 503.6K
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词之间用空格隔开。返回字符串中最后一个单词的长度。如果不存在最后一个单词，请返回 0 。
 * 
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "Hello World"
 * 输出：5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = " "
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅有英文字母和空格 ' ' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   let index;
//   var i = s.length - 1
//   for (; i >= 0; i--) {
//     if (s[i] !== ' ' && !index) {
//       index = i;
//     } else if (index && s[i] === ' ') {
//       break;
//     }
//   }
//   return index === undefined ? 0 : index - i
// };

var lengthOfLastWord = function (s) {
  let end = s.length - 1
  while(end >= 0 && s.charAt(end) === ' ') end--;
  if (end < 0) return 0
  let start = end;
  while(start >= 0 && s.charAt(start) !== ' ') start--;
  return end - start;
};
// @lc code=end

