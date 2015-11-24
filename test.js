var test = require('tape')
var allclose = require('./index.js')

test('number', function (t) {
  allclose(t)(1, 1)
  t.end()
})

test('number close', function (t) {
  allclose(t)(1, 1.00000001)
  t.end()
})

test('number with specified tolerance', function (t) {
  allclose(t, 0.2)(1, 1.1)
  t.end()
})

test('array', function (t) {
  allclose(t)([1, 1], [1, 1])
  t.end()
})

test('array close', function (t) {
  allclose(t)([1, 1], [1, 1.00000001])
  t.end()
})

test('nested array', function (t) {
  allclose(t)([[1, 1], [1, 1]], [[1, 1], [1, 1]])
  t.end()
})

test('nested array close', function (t) {
  allclose(t)([[1, 1], [1, 1.00000001]], [[1, 1.00000001], [1, 1]])
  t.end()
})

test('non-numeric', function (t) {
  allclose(t)('a', 'a')
  t.end()
})

test('non-numeric array', function (t) {
  allclose(t)(['a', 'b'], ['a', 'b'])
  t.end()
})

test('mixed array', function (t) {
  allclose(t)(['a', 1], ['a', 1])
  t.end()
})