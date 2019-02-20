'use strict';
var calculate_average = function(collection){
  var collect = collection.filter((elem,index,arr) => (index+1)%2===0 );
  return collect.reduce((a,b)=> a+b)/collect.length
};
module.exports = calculate_average;
