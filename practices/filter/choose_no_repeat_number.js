'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  return collection.filter(function (element, index, collection) {
    return collection.indexOf(element) === index;
  });
}

module.exports = choose_no_repeat_number;
