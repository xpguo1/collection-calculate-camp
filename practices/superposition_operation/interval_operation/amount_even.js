'use strict';

function amount_even(collection) {

  //在这里写入代码
  var collect = collection.filter(r => r%2 === 0);
  return collect.reduce((a,b)=> a+b);
}

module.exports = amount_even;
