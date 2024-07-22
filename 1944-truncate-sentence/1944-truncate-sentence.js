/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let sentence = s.split(" ")
    let final = [];
    for(i=0;i<k;i++){
        final.push(sentence[i])
    }
    return final.join(" ")
};
