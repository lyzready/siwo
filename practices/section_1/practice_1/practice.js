function collect_same_elements(collection_a, collection_b) {
  var re=[];
  for (var i = 0; i < collection_a; i++)
  {
	if(collection_b.indexOf(collection_a[i])!=-1 &&
		re.indexOf(collection_a[i] == -1)//排除已包含元素
	{re.push(collection_a[i]);}	
  }
  return re;
}

module.exports = collect_same_elements;
