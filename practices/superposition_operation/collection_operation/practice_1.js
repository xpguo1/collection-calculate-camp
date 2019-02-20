'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.reduce((a,b) => a + b*3+2,0)
}

module.exports = hybrid_operation;

