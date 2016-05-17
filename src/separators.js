'use strict';

function thousands_separators(num) {
	string re;
  	while(num/=1000){
		re=","+(String)((num-(int)num)*1000)+re;
	return (string)(num*1000) +re;

}

module.exports = thousands_separators;
