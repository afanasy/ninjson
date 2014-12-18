var njTest = function () {
  var test = {
    '".person"': '<div class="person"></div>',
    '{".person": {"text": "Afanasy"}}': '<div class="person">Afanasy</div>',
    '{".person": [".name"]}': '<div class="person"><div class="name"></div></div>',
    '"span.name.bold"': '<span class="name bold"></span>',
    '{"a.name": {"attr": {"href": "#"}, "text": "Afanasy"}}': '<a class="name" href="#">Afanasy</a>',
    '{".person": {"nj": ".name"}}': '<div class="person"><div class="name"></div></div>',
    '[".person", ".wall", ".footer"]': '<div class="person"></div><div class="wall"></div><div class="footer"></div>',
    '[".person", ".wall", {".footer": {"css": {"text-align": "center"}}}]': '<div class="person"></div><div class="wall"></div><div class="footer" style="text-align: center;"></div>',
    '"a.person[href=#]"': '<a class="person" href="#"></a>',
    '"a.person[href = #]"': '<a class="person" href="#"></a>',
    '"a.person[href=\'#\']"': '<a class="person" href="#"></a>',
    '"a.person[href=\\"#\\"]"': '<a class="person" href="#"></a>',
    '"a.person [href=\\"#\\"]"': '<a class="person" href="#"></a>',
    '"a.person [href=\\"#\\"]"': '<a class="person" href="#"></a>',
    '"a.person#profile"': '<a class="person" id="profile"></a>',
    '"a#profile.person"': '<a class="person" id="profile"></a>',
    '".a#profile.person"': '<div class="a person" id="profile"></div>'
  } 
  _.each(test, function (value, key) {
    var html = $('<div>').append($.nj(JSON.parse(key))).html()
    if (html == value)
      console.log(key + ' ok')
    else
      console.log(key + ' failed: ' + html)
  })
}
