var _ = require('lodash')
var almost = require('almost-equal')

module.exports = function allclose(a, b, atol, rtol) {
  if (!_.isNumber(atol)) atol = almost.FLT_EPSILON
  if (!_.isNumber(rtol)) rtol = 0

  function shape(a) {
    if (_.isNumber(a)) return 1
    if (_.isArray(a) && _.isArray(a[0])) return[a.length, a[0].length]
    if (_.isArray(a)) return a.length
    return 0
  }

  var sameshape = _.isEqual(shape(a), shape(b))
  var pairs = _.zip(_.flattenDeep([a]), _.flattenDeep([b]))
  var samevalues = pairs.map(function (d) {
    return almost(d[0], d[1], atol, rtol)
  })

  return sameshape && _.all(samevalues)
}