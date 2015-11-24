var _ = require('lodash')
var almost = require('array-almost-equal')
var FLT_EPSILON = require('almost-equal').FLT_EPSILON

module.exports = function allclose(t, atol, rtol) {
    if (typeof atol !== 'number') atol = FLT_EPSILON

    function compare(bool, value, expected, msg) {
        msg = msg || 'should '+ (bool ? '' : 'not') + ' be almost equivalent'
        // if expected is a number
        // if expected is an array
            // check if length matches
        // if expected is a nested array
            // check if dimensions match
        // if any failure here, return msg 'shapes should match'
        //      // and return equality on the dimensions
        // otherwise
        // flatten the array and do the almost
        return almost(_.flatten(value), _.flatten(expected), atol, rtol) === bool
            ? t.ok(true, msg) 
            : t.equal(fix(value, atol), expected, msg)
    }

    var fuzzy = compare.bind(null, true)
    fuzzy.not = compare.bind(null, false)
    return fuzzy
}

function fix(array, eps) {
    var m = 1 / eps
    return Array.prototype.slice.call(array).map(function(e) {
        if (typeof e === 'number') 
            return Math.round(e * m) / m
        else
            return e
    })
}