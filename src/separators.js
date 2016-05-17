'use strict';

function thousands_separators(num) {
	var re="";
	var n=num;
  	while(n/=1000){
		re=","+(String)(1000*(n-(int)n))+re;
	}
	return (String)(n*1000) +re;

}

module.exports = thousands_separators;
