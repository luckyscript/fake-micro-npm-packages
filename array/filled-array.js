function fill(x, num) {
    let arr = [];
    if(isNaN(num)) {
        return [];
    }
    if(typeof x === 'function') {
        for(let i = 0; i < num; i++) {
            arr[i] = x.call(this, i);
        }
        return arr;
    }
    for(let i = 0; i < num; i++) {
        arr[i] = x;
    }
    return arr;
}
module.exports = fill;