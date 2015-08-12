var pronouncing = require('pronouncing')
var phrases = require('./phrases')

var the_burden = phrases.reduce(function (truth, p) { // yeah, burden of proof, the_truth!
  assignIt(truth, p)
  return truth
}, {})

function assignIt (obj, phr) {
  if (!obj[phr.words[0]]) obj[phr.words[0]] = []
  if (!obj[phr.words[1]]) obj[phr.words[1]] = []

  obj[phr.words[1]].push({word: phr.words[0], rhyme: phr.words[1], phrase: phr.phrase})
  obj[phr.words[0]].push({word: phr.words[1], rhyme: phr.words[0], phrase: phr.phrase})
}

module.exports = function (word) {
  var nickels = pronouncing.rhymes(word) // you know, like nickels and dimes, rhymes?
  if (!nickels.length) {
    return false
  }
  var donuts = nickels.filter(function (nickel) { // you know, like donut batches, matches? (ok this one is a stretch)
    return !!the_burden[nickel]
  })
  if (!donuts.length) {
    return false
  }

  var dolphins = the_burden[donuts[~~(Math.random() * donuts.length)]] // you dont wanna know

  return dolphins[~~(Math.random() * dolphins.length)]
}
