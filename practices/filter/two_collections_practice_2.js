'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  return collection_a.concat(collection_b).filter(result => !collection_b.includes(result) || !collection_a.includes(result));
}

module.exports = choose_no_common_elements;
