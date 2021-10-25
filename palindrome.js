/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0 || x.toString() !== x.toString().split('').reverse().join(''))
      return false
  return true
}