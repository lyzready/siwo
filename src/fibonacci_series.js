'use strict';

function fibonacci_series(n) {
	var re =[0];
	myfunction(re,n);

	return re;
}
function myfunction(re,n){
	if(n>1)
		return re[n]=myfunction(re,n-1)+myfunction(re,n-2);
	else
		return re[n]=n;
}
module.exports = fibonacci_series;
