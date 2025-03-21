/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let bit = Math.pow(2,31) -1 ;
    let rev = x.toString().split("").reverse().join('');
    let result = parseInt(rev);

    if(result > (bit) || result <-(bit)){
        return 0;
    }

    if(x<0){
        return -result
    }else{
        return result
    }
};