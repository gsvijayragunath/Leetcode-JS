/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern,s){

  let stoSplit = s.split(" ");
  let patternToSplit = pattern.split("");

  if(!stoSplit.length === patternToSplit.length) return false;

  let smap = new Map();
  let pmap = new Map()
  let res1 = "";
  let res2 = "";
  for(let i=0;i<patternToSplit.length;i++){
    smap.set(stoSplit[i],patternToSplit[i])
    pmap.set(patternToSplit[i],stoSplit[i])
  }
  // console.log(smap);
  // console.log(pmap);

  for(i=0;i<patternToSplit.length;i++){
    res1 += smap.get(stoSplit[i])
    res2 += pmap.get(patternToSplit[i])
  }

  // console.log(s.split(" ").join(""))
  if(res1 === pattern && res2 === s.split(" ").join("")){
    return true;
  }else{
    return false;
  }
}