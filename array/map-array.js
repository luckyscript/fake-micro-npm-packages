function map (obj, fn) {
    if(!isObject(obj)) {
        throw new Error('expect an object')
    }
    let defaultFn = (key, value) => {
        return {key, value}
    }
    fn = fn || defaultFn;
    let result = [];
    for (let key in obj) {
        let value = obj[key];
        result.push(fn(key, value));
    }
    return result;
}

function isObject(o) {
    if(Object.prototype.toString.call(o) === '[object Object]')
        return true;
    return false;
}
module.exports = map;