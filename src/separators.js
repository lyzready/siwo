'use strict';

function thousands_separators(num) {
	var re="";
  	while(num/=1000){
		re=","+(String)((num-(int)num)*1000)+re;
	return (String)(num*1000) +re;

}

module.exports = thousands_separators;
