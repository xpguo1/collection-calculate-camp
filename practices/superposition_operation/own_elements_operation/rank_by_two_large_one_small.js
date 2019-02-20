'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。、
  var collect = collection.sort((a,b)=>a-b);
  return collect.map(function (elem,index,arr) {
    if(index % 3 === 2){
      return arr[index - 2];
    }
    else if(arr[index+2]){return arr[index + 1];}
    else return elem;

  });
}
module.exports = rank_by_two_large_one_small;
