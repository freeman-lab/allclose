# allclose

Compare numbers, arrays, or nested arrays for equality up to some tolerance. Checks both shapes and values. Uses [almost-equal](https://github.com/scijs/almost-equal) and generalizes [array-almost-equal](https://github.com/Jam3/array-almost-equal). Useful when working with lists of coordinates and other numerical data.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# install

use npm

```
npm install allclose
```

# usage

#### `allclose(a, b, [atol], [rtol])`

requires two numbers or arrays or nested arrays `a` and `b`, and optionally an absolute tolerance `atol` and a relative tolerance `rtol`. returns `true` if `a` and `b` have the same shape and value, and `false` otherwise.

# examples

you can test numbers

```javascript
allclose(1, 1)
> true

allclose(1, 2)
> false
```

or arrays

```javascript
allclose([1, 2], [1, 2])
> true

allclose([1, 2], [1, 2, 3])
> false

allclose([1, 2], [1, 3])
> false
```

or nested arrays

```javascript
allclose([[1, 2], [3, 4]], [[1, 2], [3, 4]])
> true

allclose([[1, 2], [3, 4]], [[1, 2], [3, 4], [5, 6]])
> false

allclose([[1, 2], [3, 4]], [[1, 2], [3, 5]])
> false
```

and you can optionally specify a tolerance

```javascript
allclose([1, 2], [1, 2.1])
> false

allclose([1, 2], [1, 2.1], 0.2)
> true
```



