'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  return collection.filter(result => result % 2 === 0).map(r => String.fromCharCode(r+96));
}

module.exports = even_to_letter;
