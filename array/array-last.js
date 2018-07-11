module.exports = function(arr) {
    if(!Array.isArray(arr)) 
        throw new Error('array-last expects an array argument')
    if(arr.length === 0)
        return null;
    return arr.pop();
}