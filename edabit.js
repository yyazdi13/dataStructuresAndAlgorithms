function calculateDifference(obj, limit) {
    var objKeys = Object.values(obj);
	let total = 0;
	for (let i = 0; i < objKeys.length; i++){
		total += objKeys[i];
    }
    return total - limit;
	
}

console.log(calculateDifference({skate: 300, shoes: 400}, 500))