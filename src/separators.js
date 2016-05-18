'use strict';

function thousands_separators(num) {
	var n=num.toString().split('.');
	var inte_spl=n[0].split('');
	for(var i=inte_spl.length-4;i>0;i-=3){
		inte_spl[i]+=',';
	}
	n[0]=inte_spl.join('');
	return n.join('.');
}

module.exports = thousands_separators;
