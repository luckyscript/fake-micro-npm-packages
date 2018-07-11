module.exports = function(array, num) {
    if(!Array.isArray(array))
        throw new Error('array-first expects an array as the first argument')
    if(isNaN(num))
        num = 1;
    if(num > array.length)
        throw new Error('size overflow')
    return array.slice(0, num);
}