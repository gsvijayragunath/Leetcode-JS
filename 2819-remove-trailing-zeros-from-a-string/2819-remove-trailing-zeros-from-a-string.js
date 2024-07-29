/**
 * @param {string} num
 * @return {string}
 */

var removeTrailingZeros = function(num){
    if(num[num.length-1] !=="0") return num;
    let word = num;

    for(i=word.length-1;i>=0;i--){
        if(word[i] !=="0"){
            break;
        }else{
            word = word.slice(0,i)
        }
    }
    return word;   
};