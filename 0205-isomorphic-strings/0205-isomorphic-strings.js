/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s,t){

if(s.length !== t.length) return false;

let sSplit = s.split("");
let tSplit = t.split("");

const sWord = new Map();
const tWord = new Map();

for(i=0;i<s.length;i++){
  sWord.set(sSplit[i],tSplit[i]);
  tWord.set(tSplit[i],sSplit[i])
}

// console.log(sWord);
// console.log(tWord);

let word1 = [];
let word2 = [];

for(i=0;i<s.length;i++){
  word1.push(sWord.get(s[i]))
  word2.push(tWord.get(t[i]))
}

// console.log(word1);
// console.log(word2)

const result = word1.join("")===t && word2.join("")==s ? true : false;
return result;
};
