function calculate_median(arr) {
	var length=arr.length;
	if(length<2)//input error
		return "array length must greater than 1";
	var even_length=Math.floor(length/2);
	var median;
	if(even_length% 2 == 0)//有2n个偶数
		median = (arr[even_length-1]+arr[even_length+1])/2;//所有偶数的中位数为中间两个偶数的平均值
	else
		median = arr[even_length];//中位数是最中间的偶数
	return median; 
		
}

module.exports = calculate_median;
