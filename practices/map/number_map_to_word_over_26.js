'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(x => String.fromCharCode(x + 96));

};

module.exports = number_map_to_word_over_26;
