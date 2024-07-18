/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let letter = s.split("")
    let final = [];
    let mapped = new Map();
    for(i=0;i<indices.length;i++){
        mapped.set(indices[i],letter[i])
    }
    let sortedIndices = indices.sort((a,b) => a-b);
    for(i=0;i<sortedIndices.length;i++){
        final.push(mapped.get(i))
     }
     return final.join("")
 };
