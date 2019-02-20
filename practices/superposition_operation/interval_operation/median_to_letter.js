'use strict';

function median_to_letter(collection) {

  //在这里写入代码
 var median = Math.ceil((collection[collection.length/2]+collection[collection.length/2-1])/2);
  console.log(median);

}

module.exports = median_to_letter;
