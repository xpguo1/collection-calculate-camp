function collect_same_elements(collection_a, object_b) {
  //在这里写入代码

 return collection_a.filter(result => [].concat.apply([],Object.values(object_b)).includes(result));

}

module.exports = collect_same_elements;
