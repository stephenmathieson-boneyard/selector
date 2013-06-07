
var pre = [
      // prefixes to Element#matchesSelector
      'o', 'ms', 'moz', 'webkit'
    ],
    method = 'matchesSelector'

if (!Element.prototype[method])
  for (var index = pre.length - 1; method = pre[index] + 'MatchesSelector', index >= 0; index--)
    if (Element.prototype[method])
      break

/**
 * Turn a `list` into an `array`
 *
 * @api private
 * @param {Array-like} list
 * @return {Array}
 */
function array(list) {
  var res = []

  for (var i = 0, len = list.length; i < len; i++)
    res.push(list[i])

  return res
}

/**
 * Get a context for a `selector`.
 *
 * @api private
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function context(e) {
  return !e
    // when not provided, use the document
    ? document
    : typeof e === 'string'
      // when given a selector, use it
      ? selector.query(e)
      // hopefully (probably) an element
      : e
}

/**
 * Select an `array` of `HTMLElement`s by a `css`-style
 * selector via `querySelectorAll`.  Yes, I said `array`.
 *
 *
 * #### Aliased as `selector.queryAll`
 *
 * @api public
 * @param {String} css
 * @param {HTMLElement|String} [root]
 * @return {Array}
 */
var selector = module.exports = function (css, root) {
  return array(context(root).querySelectorAll(css))
}

// alias
selector.queryAll = selector;

/**
 * Select an `HTMLElement` from a `css`-style selector
 * via `querySelector`
 *
 * @api public
 * @param {String} css
 * @param {HTMLElement|String} root
 * @return {HTMLElement}
 */
selector.query = function (css, root) {
  return context(root).querySelector(css)
}

/**
 * Check if an `element` matches a `css`-style selector
 *
 * @api public
 * @param {HTMLElement} element
 * @param {String} css
 * @return {Boolean}
 */
selector.matches = function (element, css) {
  var nodes, index

  if (element[method])
    return element[method](css)

  nodes = selector(css)
  for (index = nodes.length - 1; index >= 0; index--)
    if (nodes[index] === element)
      return true
}
