'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var collect = [];
  collect = collection.split('->');
  collect.sort(function (v1,v2) {
    return v1<v2?1:-1;});
  console.log(collect);
  return collect[collect.length%2==0? collect.length/2:(collect.length+1)/2];

}

module.exports = compute_chain_median;
