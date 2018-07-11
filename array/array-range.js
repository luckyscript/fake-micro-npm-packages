function range (from, to) {
    if(isNaN(from))
        from = 0;
    if(isNaN(to))
        to = 0;
    if(from > to) {
        let e = from;
        from = to;
        to = e;
    }
    let result = [];
    for (i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
}

module.exports = range;