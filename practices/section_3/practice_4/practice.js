function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collect2 = [];
  collection_a.filter(function(elem,index,arr){
    return arr.indexOf(elem) === index
  }).map(function (element) {
    var object1 = new Object();
    if(element.length === 1){
      object1['key'] = element;
      object1['count'] = collection_a.reduce((a, v) => v === element ? a + 1 : a + 0, 0);
    } else {console.log(element.slice(2,3))
      object1['key'] = element.slice(0,1);
      object1['count'] = Number(element.slice(2,3));
    }
    collect2.push(object1);
  });
  return collect2.map(function (elem,index,coll_a) {
    if(object_b.value.find(r => r === elem.key)) {
      elem.count -= Math.floor(elem.count / 3);
    }
    return elem;
  });
}

module.exports = create_updated_collection;
