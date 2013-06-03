
# selector

  Convenience methods for document.querySelector[All]

## Installation

    $ component install stephenmathieson/selector

## API

### `selector(css, [root])`

Examples:

```js
selector('div')
selector('div', '#main')
selector('div', document.getElementById('main'))

// selector === selector.queryAll
selector.queryAll('div')
selector.queryAll('div', '#main')
selector.queryAll('div', document.getElementById('main'))
```

### `selector.query(css, [root])`

Examples:

```js
selector.query('div')
selector.query('div', '#main')
selector.query('div', document.getElementById('main'))
```

## License

  MIT
