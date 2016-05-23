'use strict';

function double_to_one(collection) {

 var re=[];
	for( var n1=0 ; n1< collection.length; n1++){
		if(re[n1].length == undefined)
			re.push(collection[n1]);
		else
			for(var n2 = 0;n2< collection[n1].length;n2++)
				re.push(collection[n1][n2]);
	}
	return re;
}

module.exports = double_to_one;
