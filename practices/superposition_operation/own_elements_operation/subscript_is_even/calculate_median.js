'use strict';
var calculate_median = function(collection){
  var collect = collection.filter((elem,index,arr)=>(index+1)%2===0)
  return collect.length % 2 === 0 ? (collect[collect.length/2]+collect[collect.length/2-1])/2 : collect[(collect.length-1)/2]
};
module.exports = calculate_median;
