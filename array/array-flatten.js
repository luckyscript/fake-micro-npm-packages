function flatten(arr, re = []) {
    arr.forEach(v => {
        if(Array.isArray(v)) {
            flatten(v, re)
        } else {
            re.push(v)
        }
    })
    return re;
}

module.exports = flatten;