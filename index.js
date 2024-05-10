const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java', 'Kotlin', 'Android']
// Endpoint Read All [GET] /personagem
app.get ('/personagem', function (req, res) {
  res.send(lista)
})

app.listen(3000, function() {
  console.log("Aplicação rodando em http://localhost:3000")
})