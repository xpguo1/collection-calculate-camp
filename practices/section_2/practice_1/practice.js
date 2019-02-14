function count_same_elements(collection) {
  //在这里写入代码

  var collect = collection.filter(function(elem,index,arr){
    return arr.indexOf(elem) === index
  });
  var collect2 = [];
  collect.map(function (element) {
    var object1 = new Object();
    object1['key'] = element;
    object1['count'] = collection.reduce((a, v) => v === element ? a + 1 : a + 0, 0);
    collect2.push(object1);
  });
  return collect2;
}

module.exports = count_same_elements;
