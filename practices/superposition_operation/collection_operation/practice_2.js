'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(result => result % 2 > 0).map(r => r*3+2)
}

module.exports = hybrid_operation_to_uneven;

