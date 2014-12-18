/*{
  "name": "ninjson",
  "version": "1.0.0",
  "homepage": "https://github.com/afanasy/ninjson",
  "author": "Afanasy Kurakin",
  "license": "MIT"
}*/

$.nj = function (d) {
  if (_.isString(d)) {
    var
      attr = {},
      whitespace = '[\\x20\\t\\r\\n\\f]',
      characterEncoding = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
	    identifier = characterEncoding.replace('w', 'w#'),
      id = new RegExp('#(' + characterEncoding + ')'),
      attribute = new RegExp("\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*=" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]"),
      m
    if (m = d.match(id)) {
      attr.id = m[1]
      d = d.substr(0, m.index) + d.substr(m.index + m[0].length)
    }
    while (m = d.match(attribute)) {
      var value = m[2] || m[3] || m[4]
      attr[m[1]] = value
      d = d.substr(0, m.index) + d.substr(m.index + m[0].length)
    }
    d = d.split('.')      
    if (d[0] === '')
      d[0] = 'div'
    return $('<' + d[0] + '>').addClass(d.splice(1).join(' ')).attr(attr)
  }
  if (_.isArray(d)) {
    return _.map(d, function (d) {
      return $.nj(d)
    })
  }
  if (_.isObject(d)) {      
    var box = _.map(d, function (value, key) {
      if (_.isString(value))
        return $.nj(key).text(value)
      else 
        return $.nj(key).nj(value)
    })
    if (_.size(box) == 1)
      return box[0]
    return box
  }
}

$.fn.nj = function (d) {
  var box = $(this)
  if (!_.isString(d) && !_.isArray(d) && _.isObject(d) && !_.keys(d)[0].match(/\.|\[|\]|#/)) {
    _.each(d, function (value, key) {
      if (_.isFunction(box[key])) {
        box[key](value) 
      }
    })
    return this
  }
  return $(this).append($.nj(d))
}
