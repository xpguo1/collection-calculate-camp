'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collect = [];
  if(number_a<number_b) {
    for (var x = number_a; x <= number_b; x++) {
      if(x%26 === 0){
        collect.push(x === 26?String.fromCharCode(x+96):String.fromCharCode(x/26-1+96)+String.fromCharCode(26+96))
      }
      else {
        collect.push(x < 26 ? String.fromCharCode(x + 96) : String.fromCharCode(x / 26 + 96) + String.fromCharCode(x % 26 + 96))
      }
    }
  }
  else if (number_a >= number_b){
    for (var x = number_a; x >= number_b; x--) {
      if(x%26 === 0){
        collect.push(x === 26?String.fromCharCode(x+96):String.fromCharCode(x/26-1+96)+String.fromCharCode(26+96))
      }
      else {
        collect.push(x < 26 ? String.fromCharCode(x + 96) : String.fromCharCode(x / 26 + 96) + String.fromCharCode(x % 26 + 96))
      }
    }
  }

  return collect;
}

module.exports = get_letter_interval;
