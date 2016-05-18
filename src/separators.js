'use strict';

function thousands_separators(num) {
	var re="";
	var n=num;
 	while((n/=1000)>1){
		re=","+(1000*(n-Math.floor(n))).toString()+re;
		n=Math.floor(n);
	}
	return (n*1000).toString() +re;
}

module.exports = thousands_separators;
