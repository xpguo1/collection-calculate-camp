'use strict';

function find_first_even(collection) {
  //在这里写入代码
  //return collection.filter(result => result % 2 == 0)[0];
  return collection.find(result => result % 2 === 0);

}

module.exports = find_first_even;

