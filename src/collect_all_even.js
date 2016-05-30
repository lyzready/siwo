'use strict';

function collect_all_even(collection) {
  return collection.filter(checkDouble);
}
function checkDouble(num){
	return num%2 ==0;
}
module.exports = collect_all_even;
