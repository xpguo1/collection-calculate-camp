'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var collect = collection.filter(result => result % 2 == 0);
  return collect[collect.length-1];
}

module.exports = find_last_even;
