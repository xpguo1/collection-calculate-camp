function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collect = collection_a.map(result => Object.values(result));

  return [].concat.apply([],collect).filter(element => [].concat.apply([],Object.values(object_b)).includes(element));

}

module.exports = collect_same_elements;
