'use strict';
var single_element = function(collection){
  var collect = collection.filter((elem,index,arr)=> index%2>0);
  var collect_2 = collect.filter((elem,index,arr)=>arr.indexOf(elem)!=index);
  return collect.filter(v=> collect_2.indexOf(v)===-1);
};
module.exports = single_element;
