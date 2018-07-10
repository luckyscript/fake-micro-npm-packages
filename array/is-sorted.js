module.exports = function isSorted(arr) {
	arr.forEach((v, i) => {
		if(i > 0 && v < arr[i-1]) {
			return false;
		}
	})
	return true;
}

