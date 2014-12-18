A lightweight javascript front-end template engine, providing compact JSON syntax for dynamic inline HTML generation.
It works as jquery plugin and requires underscore.js to run.

## Examples

Div with class
```javascript
$.nj(".package")
//<div class="package"></div>
```

Nested divs
```javascript
$.nj({
  ".package": {
    ".name": "ninjson",
    ".version": "1.0.0"
  }
})
/*
<div class="package">
  <div class="name">ninjson</div>
  <div class="version">1.0.0</div>
</div>
*/
```

Attributes and text
```javascript
$.nj({
  ".package": {
    ".name": "ninjson",
    ".version": "1.0.0",
    ".homepage": {
      "a[href='https://github.com/afanasy/ninjson']": "Fork me on Github"
    }
  }
})
/*
<div class="package">
  <div class="name">ninjson</div>
  <div class="version">1.0.0</div>
  <div class="homepage">
    <a href="https://github.com/afanasy/ninjson">Fork me on Github</a>
  </div>
</div>
*/
```

Jquery calls (attr, css and text)
```javascript
$.nj({
  ".package": {
    ".name": "ninjson",
    ".version": "1.0.0",
    ".homepage": {
      "a.": {"attr": {"href": "https://github.com/afanasy/ninjson", "title": "Homepage"}, "css": {"text-decoration": "none"}, "text": "Fork me on Github"}
    }
  }
})
/*
<div class="package">
  <div class="name">ninjson</div>
  <div class="version">1.0.0</div>
  <div class="homepage">
    <a href="https://github.com/afanasy/ninjson">Fork me on Github</a>
  </div>
</div>
*/
```

Adding click event handler
```javascript
$.nj({
  ".package": {
    ".name": "ninjson",
    ".version": "1.0.0",
    ".homepage": {
      "a[href=#]": {"text": "Fork me on Github", "click": function () {
         location = 'https://github.com/afanasy/ninjson'
         return false
      }}
    }
  }
})
```
