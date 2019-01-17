'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var a = 0;
  var b = 0;
  var count = 0;
  for(b; b < collection_b.length; b++) {
    for(a; a < collection_a.length; a++){
      if(collection_b[b] != collection_a[a])
        count++;
    }
    if (count === collection_a.length)
      collection_a.push(collection_b[b]);
    a = 0;
    count = 0;
  }
  return collection_a;
}

module.exports = get_union;

