var tap = require('tape')
var cockneyRhymingSlang = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.equal(cockneyRhymingSlang('world'), 'hello world', 'does it')
})
