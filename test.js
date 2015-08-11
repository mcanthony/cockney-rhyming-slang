var tap = require('tape')
var cockneyRhymingSlang = require('./')

// wow its gonna be rly hard to find repeatable test cases...

tap.test('does the thing', function (t) {
  t.plan(1)
  t.deepEqual(cockneyRhymingSlang('herd'), {word: 'hand', other: 'bird', phrase: 'bird in the hand'}, 'does it')
})

tap.test('if no words rhyme it returns undefined', function (t) {
  t.plan(1)
  t.ok(!cockneyRhymingSlang('orange'), 'yup, good enough')
})

tap.test('if no rhyming words in the thing returns undefined', function (t) {
  t.plan(1)
  t.ok(!cockneyRhymingSlang('whaaaaaaaaaaaaatgonna be hard to find a test case for this, yup. throw an error here specifically and HOPE HOPE or like run a dict/words through it, you know, whatever'), 'yup, good enough')
})

