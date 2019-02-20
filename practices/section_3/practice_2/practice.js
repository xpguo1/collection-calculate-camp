function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  return collection_a.map(function (elem,index,coll_a) {
    if(object_b.value.find(r => r === elem.key)) {
      elem.count -= Math.floor(elem.count / 3);
    }
    return elem;
  });
}

module.exports = create_updated_collection;
