var test = require('tape')
var allclose = require('./index.js')
var msg = 'should all be close'
var notmsg = 'should not all be close'

test('number', function (t) {
  t.ok(allclose(1, 1.0000001), msg)
  t.notok(allclose(1, 2), notmsg)
  t.end()
})

test('number close', function (t) {
  t.ok(allclose(1, 1.000000001), msg)
  t.notok(allclose(1, 1.1), notmsg)
  t.end()
})

test('number with specified tolerance', function (t) {
  t.ok(allclose(1, 1.1, 0.2), msg)
  t.notok(allclose(1, 1.3, 0.2), notmsg)
  t.end()
})

test('array', function (t) {
  t.ok(allclose([1, 1], [1, 1]), msg)
  t.notok(allclose([1, 1], [1, 2]), notmsg)
  t.end()
})

test('array close', function (t) {
  t.ok(allclose([1, 1], [1, 1.00000001]), msg)
  t.notok(allclose([1, 1], [1, 1.1]), notmsg)
  t.end()
})

test('nested array', function (t) {
  t.ok(allclose([[1, 1], [1, 1]], [[1, 1], [1, 1]]), msg)
  t.notok(allclose([[1, 1], [1, 1]], [[1, 1], [1, 2]]), notmsg)
  t.end()
})

test('nested array close', function (t) {
  t.ok(allclose([[1, 1], [1, 1.00000001]], [[1, 1.00000001], [1, 1]]), msg)
  t.notok(allclose([[1, 1], [1, 1]], [[1, 1], [1, 1.1]]), notmsg)
  t.end()
})

test('non-numeric', function (t) {
  t.ok(allclose('a', 'a'), msg)
  t.notok(allclose('a', 'b'), notmsg)
  t.end()
})

test('non-numeric array', function (t) {
  t.ok(allclose(['a', 'b'], ['a', 'b']), msg)
  t.notok(allclose(['a', 'b'], ['a', 'c']), notmsg)
  t.end()
})

test('mixed array', function (t) {
  t.ok(allclose(['a', 1], ['a', 1]), msg)
  t.notok(allclose(['a', 1], ['a', 2]), notmsg)
  t.end()
})
