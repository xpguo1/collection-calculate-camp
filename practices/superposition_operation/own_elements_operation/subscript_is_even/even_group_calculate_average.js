'use strict';
var even_group_calculate_average = function(collection){
  var collect_1 = collection.filter(function(elem,index,arr) {
    if(index % 2 > 0 & elem % 2 === 0 & String(elem).length === 1) {
      return elem;
    }
  });

  var collect_2 = collection.filter(function(elem,index,arr) {
    if(index % 2 > 0 & elem % 2 === 0 & String(elem).length === 2) {
      return elem;
    }
  });

  var collect_3 = collection.filter(function(elem,index,arr) {
    if(index % 2 > 0 & elem % 2 === 0 & String(elem).length === 3) {
      return elem;
    }
  });

  var collect = [];
  if (collect_1.length === 0 & collect_2.length === 0 ){
    if(collect_3.length > 0){
    collect.push(collect_3.reduce((a,b)=>a+b)/collect_3.length);
    }
    else collect.push(0);
  }
  else {
    collect.push(collect_1.reduce((a,b)=>a+b)/collect_1.length);
    collect.push(collect_2.reduce((a,b)=>a+b)/collect_2.length)
    collect.push(collect_3.reduce((a,b)=>a+b)/collect_3.length)
  }
  return collect;
};
module.exports = even_group_calculate_average;
