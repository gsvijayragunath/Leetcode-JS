/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for(i = left ;i<=right;i++){
        let firstChar = words[i][0].toLowerCase();
        let lastChar = words[i][words[i].length - 1].toLowerCase();
        if(vowels.has(firstChar) && vowels.has(lastChar)) {
            count++;
          }
    }
    return count;
};