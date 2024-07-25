/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word  = "";
    let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '`', '~',','];

    for(i=0;i<s.length;i++){
        if(specialChars.includes(s[i])){
            continue;
        }else{
            word += s[i]
        }
    }
    let correctedWord=word.split(" ").join("").toLowerCase()
    let reverseWord = "";
    for(i=correctedWord.length-1;i>=0;i--){
        reverseWord +=correctedWord[i]
    }
    
    if(correctedWord ===  reverseWord){
        return true;
    }else{
        return false;
    }
};