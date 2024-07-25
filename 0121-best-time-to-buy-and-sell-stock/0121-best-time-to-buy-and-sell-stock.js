/**
 * @param {number[]} prices
 * @return {number}
 */
 
var maxProfit = function(prices) {
    let minPrice = 1/0;
    let maxProfit = 0;

    for(i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }else{
            let profit = prices[i]-minPrice;
            maxProfit = Math.max(profit,maxProfit);
        }
    }
    return maxProfit
};