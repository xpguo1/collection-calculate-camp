function count_same_elements(collection) {
  //在这里写入代码
  var collect = collection.filter(function(elem,index,arr){
    if (arr.indexOf(elem.slice(0,1)) === -1){
      return elem;
    }
    return arr.indexOf(elem.slice(0,1)) === index;
  });
  console.log(collect);
  var collect2 = [];
  collect.map(function (element) {
    var object1 = new Object();
    object1['name'] = element.slice(0,1);
    if (element.length > 1){
      object1['summary'] = Number(element.slice(2,3));
    }
    else{
      object1['summary'] = collection.reduce(function(a,v){
        if (v.slice(0,1) === element) {
          if (v.length === 1) {return a + 1;}
          else if(v.length <5){return a + Number(v.slice(2, 3));}
          else if(v.length =5){return a + Number(v.slice(2, 4));}
        }
        else {return a + 0;}
      },0);
    }
    collect2.push(object1);
  });
  return collect2;
}

module.exports = count_same_elements;
