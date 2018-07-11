const { expect } = require('chai')
const arrayFirstN = require('../array-first-n');
describe('arrayFirstN', function() {
    it('arrayFirstN', function () {
        expect(arrayFirstN([1,2,3], 1)).to.deep.equal([1]);
        expect(() => arrayFirstN([1,2,3], 5)).to.throw();
        expect(arrayFirstN([1,2,3])).to.deep.equal([1]);
        expect(arrayFirstN([1,2,3], 2)).to.deep.equal([1, 2]);
    })
})

const arrayFirst = require('../array-first');
describe('arrayFirst', function() {
    it('arrayFirst', function() {
        expect(arrayFirst([1,2,3])).to.deep.equal(1);
        expect(arrayFirst([[1],2,3])).to.deep.equal(1);
    })
})

const isSorted = require('../is-sorted');

describe('isSorted', function() {
    let sample = [
        {param:[[1,2,3]], result: true},
        {param:[[3,2,1]], result: false},
        {param:[[3,2,1], (a,b) => b-a], result: true},
        {param:[[1,2,1]], result: false},
        {param:[['a','b',1]], result: true}
    ];
    sample.forEach(v => {
        it(`isSorted: [${v.param[0]}]`, function() {
            expect(isSorted(...v.param)).to.equal(v.result);
        })
    })
})

const arrayLast = require('../array-last');

describe('arrayLast', function() {
    let sample = [
        {param: [[1,2,3]], result: 3}
    ]
    sample.forEach(v => {
        it(`arrayLast: [${v.param[0]}]`, function() {
            expect(arrayLast(...v.param)).to.equal(v.result);
        })
    })
})

const arrayFlatten = require('../array-flatten');

describe('arrayFlatten', function() {
    let sample = [
        {param: [[1,2,3]], result : [1,2,3]},
        {param: [[1,[2],3]], result : [1,2,3]},
        {param: [[1,[2,3]]], result : [1,2,3]},
    ]
    sample.forEach(v => {
        it(`arrayFlatten: [${v.param[0]}]`, function() {
            expect(arrayFlatten(...v.param)).to.deep.equal(v.result);
        })
    })
})

const dedupe = require('../dedupe');

describe('dedupe', function() {
    let sample = [
        {param: [[1,2,3]], result : [1,2,3]},
        {param: [[1,[2],3]], result : [1,[2],3]},
        {param: [[1,[2,3]]], result : [1,[2,3]]},
        {param: [[1,1,2]], result : [1,2]},
        {param: [[{a: 1},{a: 1},{a: 2}]], result : [{a: 1},{a: 2}]},
        {param: [[{a: 1, b: 2},{a: 1},{a: 2}]], result : [{a: 1, b: 2},{a: 1},{a: 2}]},
        {param: [[{a: 1, b: 2},{a: 1},{a: 2}], (v) => v.a], result : [{a: 1, b: 2},{a: 2}]},
    ]
    sample.forEach(v => {
        it(`dedupe: [${v.param[0]}]`, function() {
            expect(dedupe(...v.param)).to.deep.equal(v.result);
        })
    })
})

const arrayRange = require('../array-range');

describe('arrayRange', function() {
    let sample = [
        {param: [1,5], result : [1,2,3,4,5]},
    ]
    sample.forEach(v => {
        it(`arrayRange: [${v.param[0]}]`, function() {
            expect(arrayRange(...v.param)).to.deep.equal(v.result);
        })
    })
})
