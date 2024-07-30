/**
 * @param {number} x
 * @return {number}
 */

    
var reverse = function(x) {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = -Math.pow(2, 31);
  let rev = 0;

  while (x !== 0) {
    const pop = x % 10;
    x = parseInt(x / 10);
    if (rev > maxInt / 10 || (rev === maxInt / 10 && pop > 7)) return 0;
    if (rev < minInt / 10 || (rev === minInt / 10 && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }

  return rev;
};
