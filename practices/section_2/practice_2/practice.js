function count_same_elements(collection) {
  //在这里写入代码

  var collect = collection.filter(function(elem,index,arr){
    return arr.indexOf(elem) === index
  });
  var collect2 = [];
  collect.map(function (element) {
    var object1 = new Object();
    if(element.length === 1){
      object1['key'] = element;
      object1['count'] = collection.reduce((a, v) => v === element ? a + 1 : a + 0, 0);
     } else {console.log(element.slice(2,3))
        object1['key'] = element.slice(0,1);
        object1['count'] = Number(element.slice(2,3));
    }
    collect2.push(object1);
  });
  return collect2;
}

module.exports = count_same_elements;
