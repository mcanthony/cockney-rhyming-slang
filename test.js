var tap = require('tape')
var cockneyRhymingSlang = require('./')

tap.test('does the thing', function (t) {
  t.plan(1)
  t.deepEqual(cockneyRhymingSlang('understand'), {rhyme: 'land', phrase: 'Nod land of', word: 'Nod'}, 'does it')
})

tap.test('if no words rhyme it returns undefined', function (t) {
  t.plan(1)
  t.ok(!cockneyRhymingSlang('Christmas'), 'yup, good enough')
})

tap.test('if no rhyming words in the thing returns undefined', function (t) {
  t.plan(1)
  t.ok(!cockneyRhymingSlang('appropriate'), 'yup, good enough')
})

