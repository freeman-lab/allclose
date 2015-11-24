# allclose

utility for [tape]() to compare numbers, arrays, or nested arrays up to some tolerance, with sensible error output on test failure. uses [almost-equal](https://github.com/scijs/almost-equal) and inspired by [test-fuzzy-array](https://github.com/Jam3/test-fuzzy-array).

# install

use npm

```
npm install allclose
```

# usage

#### `close = allclose(t, [atol], [rtol])`

returns a function `close(array1, array2)` that, when called on two arrays, will execute tests using the test instance `t`

#### examples

setup tests using `tape` as usual

```javascript
var test = require('tape')
```

then inside a test call 

```javascript
test('arrays', function (t) {
  allclose(t)([1, 2], [1, 3])
  t.end()
})
```

you can test numbers

```javascript
allclose(t)(1, 2)
```

or arrays

```javascript
allclose(t)([1, 2], [1, 3])
```

or nested arrays

```javascript
allclose(t)([[1, 2], [3, 4]], [[1, 2], [3, 5]])
```

and you can optionally specify a tolerance

```javascript
allclose(t)(1, 1.1)
> test failure
allclose(t, 0.3)(1, 1.1)
> true
```



