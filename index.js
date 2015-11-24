var _ = require('lodash')
var almost = require('almost-equal')

module.exports = function allclose(t, atol, rtol) {
  var msg
  if (_.isNumber(atol)) {
    msg = 'should have the same values (up to ' + atol + ')'
  } else {
    atol = almost.FLT_EPSILON
    msg = 'should have the same values'
  }

  function shape(a) {
    if (_.isNumber(a)) return 1
    if (_.isArray(a) && _.isArray(a[0])) return[a.length, a[0].length]
    if (_.isArray(a)) return a.length
    return 0
  }

  return function(a, b) {
    t.deepEqual(shape(a), shape(b), 'should have the same shape')
    var checks = _.zip(_.flattenDeep([a]), _.flattenDeep([b])).map(function (d) {
      return almost(d[0], d[1], atol, rtol)
    })
    if (_.all(checks)) return t.ok(true, msg)
    return t.equal(a, b, msg)
  }

}