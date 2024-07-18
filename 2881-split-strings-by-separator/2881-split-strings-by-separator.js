/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let final = words.join(" ").split(separator).join(" ").split(" ")
    for(i=0;i<final.length;i++){
        if(final[i] === ''){
            final.splice(i,1);
            i--;
        }
    }
    return final;
};