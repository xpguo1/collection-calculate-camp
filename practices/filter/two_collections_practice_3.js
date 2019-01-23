'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.filter(result => collection_b.find(v => result % v === 0));
}

module.exports = choose_divisible_integer;
