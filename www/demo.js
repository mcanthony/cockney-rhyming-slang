var cockneyRhymingSlang = require('../')

document.getElementById('input').addEventListener('keyup', function (e) {
  document.getElementById('output').textContent = cockneyRhymingSlang(document.getElementById('input').value)
})
