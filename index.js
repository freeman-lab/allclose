var isnumber = require('lodash.isnumber')
var isarray = require('lodash.isarray')
var isequal = require('lodash.isequal')
var flattendeep = require('lodash.flattendeep')
var zip = require('lodash.zip')
var almost = require('almost-equal')

module.exports = function allclose (a, b, atol, rtol) {
  if (!isnumber(atol)) atol = almost.FLT_EPSILON
  if (!isnumber(rtol)) rtol = 0

  function shape (a) {
    if (isnumber(a)) return 1
    if (isarray(a) && isarray(a[0])) return [a.length, a[0].length]
    if (isarray(a)) return a.length
    if (ArrayBuffer.isView(a)) return a.length
    return 0
  }

  var sameshape = isequal(shape(a), shape(b))
  a = isnumber(a) ? [a] : a
  b = isnumber(b) ? [b] : b
  var pairs = zip(flattendeep(a), flattendeep(b))
  var samevalues = pairs.map(function (d) {
    return almost(d[0], d[1], atol, rtol)
  })

  return sameshape && samevalues.every(function (d) { return d })
}
