'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
return collection.findIndex(function (elem,index,self) {
  if (elem === element && self.indexOf(elem) === index)
    return index;
});
}

module.exports = calculate_elements_sum;

