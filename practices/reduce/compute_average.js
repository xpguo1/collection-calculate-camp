'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce((previous,current) => current += previous)/collection.length;
}

module.exports = compute_average;

