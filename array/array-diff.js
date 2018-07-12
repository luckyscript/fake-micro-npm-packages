function diff(...args) {
    if(args.length == 0)
        return [];
    if(!Array.isArray(args[0]))
        throw new Error("diff expect an Array argument");
    let len = args.length, idx = 1, arr = args[0];
    while(idx < len) {
        arr = diffArray(arr, args[idx]);
        idx++;
    }
    return arr;
}
function diffArray(one, two) {
    if(!Array.isArray(two)) {
        return one;
    }
    return one.filter(v => !two.includes(v));
}

module.exports = diff;