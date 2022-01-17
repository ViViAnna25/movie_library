const form = document.querySelector('form')


function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:3000/movies')
    .then(resp => resp.data())
    .then(text => {
      document.getElementById('text').textContent = data
    })
}
