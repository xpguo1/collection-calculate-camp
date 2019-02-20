'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var collect = collection.filter(r => r%2>0);
  return collect.reduce((a,b)=> a+b)/collect.length;
}

module.exports = average_uneven;
