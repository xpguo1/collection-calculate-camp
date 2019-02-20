'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(x => x < 26 ? String.fromCharCode(x + 96):String.fromCharCode(x/26 + 96)+String.fromCharCode(x%26+96));

};

module.exports = number_map_to_word_over_26;
