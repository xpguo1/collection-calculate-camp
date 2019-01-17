'use strict';

function collect_all_even(collection) {
  // [1, 2, 3, 4, 5]
  //在这里写入代码
  return collection.filter(result => result % 2 ===0);

}

module.exports = collect_all_even;
