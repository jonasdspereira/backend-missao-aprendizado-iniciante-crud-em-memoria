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

// Endpoint Read By ID [GET] /personagem/:id

app.get('/personagem/:id', function (req, res) {
  // Acessamos o parâmetro de rota ID
  const id = req.params.id

  // Acessa o item na lista usando o ID - 1
  const item  = lista[id - 1]
  res.send(item)
})

// Sinaliza para o Express que estamos usando JSON no body
app.use(express.json())

// Endpoint Create [POST] /personagem
app.post ('/personagem', function(req, res) {
  // Acessamos o body da requisição
  const body = req.body

  // Acessamos a propriedade 'nome' do body
  const novoItem = body.nome

  // Adicionamos na lista
  lista.push(novoItem)

  // Exibimos uma mensagem de sucesso
  res.send("Item adicionado com sucesso: " + novoItem)
})

app.listen(3000)