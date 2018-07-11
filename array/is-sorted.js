module.exports = function isSorted(arr, fn) {
	const defaultFn = function(a, b) {
		return a - b;
	}
	fn = fn || defaultFn;
	
	for(let i = 1, len = arr.length; i < len; i++) {
		if(i > 0 && fn(arr[i], arr[i - 1]) < 0 ) 
			return false;
	}
	return true;
}

