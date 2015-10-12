var cockneyRhymingSlang = require('../')

document.getElementById('input').addEventListener('keyup', function (e) {
  var thing = cockneyRhymingSlang(document.getElementById('input').value)
  if (thing) document.getElementById('output').textContent = JSON.stringify(thing)
})
