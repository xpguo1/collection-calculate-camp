'use strict';

function grouping_count(collection) {

  //在这里写入代码

  var sum;
  var map = {}; //object和array的区别，对象的输出格式为{key:value…… },数组的输出格式为[element……]
  collection.forEach(function (element,index,self) { //mapping自定义返回格式，foreach无返回值，filter只返回符合条件的数组元素
    if(self.indexOf(element) === index) {
      sum = collection.filter(arr => arr == element).length;
      map[element] = sum;
    }
  });
  return map;
}

module.exports = grouping_count;
