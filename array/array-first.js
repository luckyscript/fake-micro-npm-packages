module.exports = function arrayFirst(array) {
	if(!Array.isArray(array))
		throw new Error('param is not an Array');
	
	if(Array.isArray(array[0]))
		return arrayFirst(array[0]);
	return array[0];
}
