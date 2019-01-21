'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collect = [];
  var letter;
  while(number_a != number_b){
    //letter = String.fromCharCode(number_a + 96);
    collect.push(number_a + 96);
  }
 // letter = String.fromCharCode(number_a + 96);
  collect.push(number_a + 96);
  return collect;
}

module.exports = get_letter_interval;
