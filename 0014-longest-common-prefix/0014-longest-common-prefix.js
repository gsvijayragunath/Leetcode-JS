/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs){
let result = "";
let currentIndex = 0;

if(strs.length ===1) return strs[0];
while(true){
    for(i=0;i< strs.length-1;i++){
        if(currentIndex >= strs[i].length || currentIndex >= strs[i+1].length ||strs[i].charAt(currentIndex) != strs[i+1].charAt(currentIndex)){
            return result;
        }
    }

    result = result + strs[0].charAt(currentIndex);
    currentIndex++;
}
};