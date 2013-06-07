
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

### `selector.matches(element, css)`

Examples:

```js
var div = selector.query('div#main[data-foo="bar"]')

selector.matches(div, 'div') //=> true
selector.matches(div, 'a') //=> false
selector.matches(div, '#main') //=> true
selector.matches(div, '[data-foo]') //=> true
selector.matches(div, '[data-foo="not bar"]') //=> false
selector.matches(div, '#main[data-foo]') //=> true
```

## Revision History

### 0.1.1 

- Fix native `{prefix}MatchesSelector` usage

### 0.1.0 

- Added `selector.matches`

### 0.0.1 

- Initial release

## License

  MIT
