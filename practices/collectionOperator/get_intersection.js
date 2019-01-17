'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var a = 0;
  var b = 0;
  var collect = [];
  for(b; b < collection_b.length; b++) {
    for(a; a < collection_a.length; a++){
      if(collection_a[a] === collection_b[b])
        collect.push(collection_b[b]);
    }
    a = 0;
  }
  return collect;
}

module.exports = get_intersection;
