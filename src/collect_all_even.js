
function collect_same_elements(collection_a, object_b) {
	var re=[];
	for(var i=0;i<collection_a.length;i++){
		if(object_b.value.some(SameTo,collection_a[i].key))
			re.splice(0,0,collection_a[i].key);
	}
	return re;	
	
}
function SameTo(value){
	return value==this;
}
module.exports = collect_same_elements;
