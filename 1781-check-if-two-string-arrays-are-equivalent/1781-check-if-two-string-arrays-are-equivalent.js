/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    function StringJoining(word){
    let emptyString = "";
    word.map(x => {
        emptyString += x +"";
    })
    return emptyString
}
let w1 = StringJoining(word1)
let w2 = StringJoining(word2)

if(w1 === w2){
    return true
}else {
    return false
}
};