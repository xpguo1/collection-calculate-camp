'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码

  var collect = [];
  while (number_a != number_b){
    if(number_a % 2 === 0)
      collect.push(number_a);
    if(number_a > number_b)
      number_a--;
    else if(number_a<number_b)
      number_a++;
  }
  if(number_a % 2 === 0)
    collect.push(number_a);

  return collect;
}

module.exports = get_integer_interval_2;
