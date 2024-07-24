/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s; 
    
    let mainArray = [];
    let index = 0;
    let down = true;

    for (let i = 0; i < numRows; i++) {
        mainArray.push([]);
    }

    for (let i = 0; i < s.length; i++) {
        mainArray[index].push(s[i]);

        if (down) {
            index++;
            if (index === numRows) {
                index -= 2;
                down = false;
            }
        } else {
            index--;
            if (index === -1) {
                index = 1;
                down = true;
            }
        }
    }

   
    let result = "";
    for (let i = 0; i < mainArray.length; i++) {
        result += mainArray[i].join("");
    }

    return result;
};

