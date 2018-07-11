function dedupe(array, fn) {
    let hash = [];
    let defaultFn = function(v) {
        return v;
    }
    fn = fn || defaultFn;
    let result = [];
    array.forEach(v => {
        if(!hash.includes(JSON.stringify(fn(v)))) {
            result.push(v)
            hash.push(JSON.stringify(fn(v)));
        }
    })
    return result;
}

module.exports = dedupe;