var test = require('tape')
var allclose = require('./index.js')
var msg = 'should all be close'

test('number', function (t) {
  t.ok(allclose(1, 1.0000001), msg)
  t.end()
})

test('number close', function (t) {
  t.ok(allclose(1, 1.000000001), msg)
  t.end()
})

test('number with specified tolerance', function (t) {
  t.ok(allclose(1, 1.1, 0.2), msg)
  t.end()
})

test('array', function (t) {
  t.ok(allclose([1, 1], [1, 1]), msg)
  t.end()
})

test('array close', function (t) {
  t.ok(allclose([1, 1], [1, 1.00000001]), msg)
  t.end()
})

test('nested array', function (t) {
  t.ok(allclose([[1, 1], [1, 1]], [[1, 1], [1, 1]]), msg)
  t.end()
})

test('nested array close', function (t) {
  t.ok(allclose([[1, 1], [1, 1.00000001]], [[1, 1.00000001], [1, 1]]), msg)
  t.end()
})

test('non-numeric', function (t) {
  t.ok(allclose('a', 'a'), msg)
  t.end()
})

test('non-numeric array', function (t) {
  t.ok(allclose(['a', 'b'], ['a', 'b']), msg)
  t.end()
})

test('mixed array', function (t) {
  t.ok(allclose(['a', 1], ['a', 1]), msg)
  t.end()
})