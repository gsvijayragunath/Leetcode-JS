/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let word = "";
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


while (columnNumber > 0) {
    let remainder = (columnNumber - 1) % 26;
    word = alphabets[remainder] + word;
    columnNumber = Math.floor((columnNumber - 1) / 26);
    }
    return word;
};