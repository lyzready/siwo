'use strict';

function double_to_one(collection) {
	var re=[];
	for( var n1=0 ; n1< collection.length; n1++){
		if(Array.isArray(re[n1]) == false && !re.some(check,collection[n1]))
			re.push(collection[n1]);
		else
			for(var n2 = 0;n2< collection[n1].length;n2++)
				if(!re.some(check,collection[n1][n2]))
					re.push(coection[n1][n2]);
	}
	return re;
}
function check(ii){
 if(ii==this)
	return 1;
}
module.exports = double_to_one;
