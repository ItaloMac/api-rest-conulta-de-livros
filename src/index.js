const express = require('express')
const {livros} = require('./bancodedados')
const livroControlador = require('./controladores./livros')

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    response.send('Servidor rodando')
})

app.get('/livros', livroControlador.pegarTodos)

app.get('/livros/:id', livroControlador.pegarPeloId)

app.post('/livros', livroControlador.criar)

app.put('/livros/:id,', livroControlador.substituir)

app.patch('/livros/:id,', livroControlador.alterar)


app.listen('3000')