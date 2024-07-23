/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let mapped = new Map();
    mapped.set("(", ")");
    mapped.set("{", "}");
    mapped.set("[", "]");

    let lengthOfInput = s.length;
    let stack = [];
    let isValid = true;

for (let i = 0; i < lengthOfInput; i++) {
    let char = s[i];
    if (mapped.has(char)) {
        stack.push(char);
    } else {
        if (stack.length === 0 || mapped.get(stack.pop()) !== char) {
            isValid = false;
            break;
        }
    }
}

if (isValid && stack.length === 0) {
   return true
} else {
    return false
}
};