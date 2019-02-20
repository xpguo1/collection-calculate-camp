'use strict';
var even_asc_odd_desc = function(collection){
  var collect_1 = collection.filter(r=>r%2===0);
  var collect_2 = collection.filter(r=>r%2>0);
  return collect_1.sort((a,b)=>a-b).concat(collect_2.sort((a,b)=>b-a));
};
module.exports = even_asc_odd_desc;
