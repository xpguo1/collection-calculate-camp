'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return [].concat.apply([],collection).filter(function (element,index,self) {
    return self.indexOf(element) === index;
  });
}

module.exports = double_to_one;
