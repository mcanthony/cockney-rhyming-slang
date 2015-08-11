var s = require('stopwords').english

var phrases = require('./phrases')

var g = phrases.filter(function(phrase){
  var good = phrase.phrase.split(" ").filter(function(word){
    return s.indexOf(word.toLowerCase()) === -1
  })
  phrase.words = good
  return good.length === 2
})

console.log(g)