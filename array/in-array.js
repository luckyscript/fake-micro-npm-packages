function inArray(v, arr) {
    arr = arr || [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if(arr[i] === v) {
            return true;
        }
    }
    return false;
}

module.exports = inArray;