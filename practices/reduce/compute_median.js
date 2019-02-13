'use strict';

function compute_median(collection) {
  //在这里写入代码
  var collect = collection.sort((a,b) => a - b);
  if (collect.length % 2 != 0)
  {
    return collect[(collect.length-1)/2];
  }

  else {
    return (collect[collect.length/2]+collect[(collect.length)/2-1])/2;
  }
}

module.exports = compute_median;


