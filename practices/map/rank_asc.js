'use strict';
var rank_asc = function(collection){
  return collection.sort(function (v1,v2) {
    return v1<v2?1:-1;
  });
};

module.exports = rank_asc;
