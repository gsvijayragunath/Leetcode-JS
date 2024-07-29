/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s){
let alphabets = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", 
                 "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];


let word = s.split("");
let index = 1 
for(i=0;i<s.length;i+=2){
    let value = alphabets.indexOf(s[i]);
    word[index] = alphabets[value + Number(s[index])]
    index +=2
}
return word.join("")
};