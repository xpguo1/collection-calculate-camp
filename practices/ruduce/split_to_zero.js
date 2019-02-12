'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var collect = [];
  collect.push(number);
  while(collect[collect.length-1]>0){
    collect.push((collect[collect.length-1]*10 - interval*10)/10);
  }
  return collect;
}

module.exports = spilt_to_zero;
