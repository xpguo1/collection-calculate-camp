'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collect = [];
  for (var x = Math.min(number_a,number_b);x<= Math.max(number_a,number_b);x++){
    collect.push(x => x < 26 ? String.fromCharCode(x + 96):String.fromCharCode(x/26 + 96)+String.fromCharCode(x%26+96))
  }
  return number_a>number_b ? collect.sort((a,b)=>b-a):collect.sort((a,b)=>a-b);
}

module.exports = get_letter_interval;
