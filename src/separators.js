'use strict';

function thousands_separators(num) {
	var re="";
	var n=num;
  	while(n/=1000>1){
		re=","+(String)(1000*(n-Math.floor(n)))+re;
		n=Math.floor(n);
	}
	return (String)(n*1000) +re;

}

module.exports = thousands_separators;
