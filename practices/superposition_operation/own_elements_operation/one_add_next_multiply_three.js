'use strict';
function one_add_next_multiply_three(collection){
  var collect = collection.map(function (elem,index,arr) {
    if (index != arr.length){
      return (elem+arr[index+1])*3;
    }
  });
  collect.pop();
  return collect;
}
module.exports = one_add_next_multiply_three;
