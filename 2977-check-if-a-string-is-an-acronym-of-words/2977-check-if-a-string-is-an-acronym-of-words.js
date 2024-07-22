/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let word = "";
    for(i=0;i<words.length;i++){
        word += words[i][0]
}
    if(word === s){
        return true
    }else{
        return false
    }
};