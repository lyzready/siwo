'use strict';

function fibonacci_series(n) {
	var re =[0];
	myfunction(re,n);
	return re;
}
function myfunction(re,n){
	if(n>2)
		return re[n]=myfunction(n-1)+myfunction(n-2);
	else
		return re[1]=re[2]=1;
}
module.exports = fibonacci_series;
