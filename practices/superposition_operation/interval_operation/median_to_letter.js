'use strict';

function median_to_letter(collection) {

  //在这里写入代码
 var median = Math.ceil((collection[collection.length/2]+collection[collection.length/2-1])/2);
  function convert(num){
    return num <= 26 ?
      String.fromCharCode(num + 96) : convert(~~((num - 1) / 26)) + convert(num % 26 || 26);
  }
  console.log(convert(median))
  return convert(median)
}

module.exports = median_to_letter;
