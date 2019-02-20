'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  var collect = collection.filter(result => result % 2 > 0);
  return collect.reduce((a,b) => a + b*3+5,0 )
}

module.exports = hybrid_operation_to_uneven;

