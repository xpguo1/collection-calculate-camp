'use strict';
var is_exist_element = function(collection,element){
  var collect = collection.filter((elem,index,arr)=> index %2 === 0)
  return collect.includes(element);
};
module.exports = is_exist_element;
