function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = Array.prototype.concat().apply([],collection_b);
  collection_a.filter(function (v) {

    return result.indexOf(v) > -1;
  });
}

module.exports = collect_same_elements;
