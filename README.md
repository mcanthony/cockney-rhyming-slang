cockney-rhyming-slang
----------------

tool to help you come up with [cockney rhyming slang](https://en.wikipedia.org/wiki/Rhyming_slang)

[![NPM](https://nodei.co/npm/cockney-rhyming-slang.png)](https://nodei.co/npm/cockney-rhyming-slang/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://secure.travis-ci.org/coleww/cockney-rhyming-slang.png)](http://travis-ci.org/coleww/cockney-rhyming-slang)

### EXAMPLE

"We're in Barney" means "we're in trouble" because trouble rhymes with Barney Rubble.

```
var crs = require('cockney-rhyming-slang')
var slang = crs('cat')
=> { word: 'Doff', rhyme: 'hat', phrase: 'Doff your hat' }
console.log('my ' + slang.word + ' knocked over my glass of water for no reason')
console.log('GET IT? cuz cat rhymes with ' + slang.rhyme + ' and ' + slang.phrase)


// auto-replace everything you can in a big text, without explanation:
a_huge_text.split(" ").map(function(word){
  var match
  if(match = crs(word)){
    return match.word
  } else {
    return word
  }
}).join(" ")
```

### API

`cockneyRhymingSlang(word)`
=> if it can't find any words that rhyme with the given word, returns false
=> if it can't find any of the rhyming words in any of the phrases it knows about, returns false
=> otherwise, it returns an object that looks like:

```
{
  word: 'the_word_to_replace_the_given_word_with',
  rhyme: 'the_word_that_rhymed_with_the_given_word',
  phrase: 'the_phrase_that_contains_both_the_word_and_rhyme'
}
```