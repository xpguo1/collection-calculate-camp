'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var collect = collection.split('->').sort((a,b) => a-b).map(Number);

  return collect.length % 2 === 0 ? (collect[collect.length / 2] + collect[collect.length / 2 - 1])/2 : collect[(collect.length-1)/2];

}

module.exports = compute_chain_median;
