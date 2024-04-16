const express = require('express')
const {livros} = require('./bancodedados')
const livroControlador = require('./controladores./livros')

const app = express()



app.get('/', (req,res) => {
    response.send('Servidor rodando')
})

app.get('/livros', livroControlador.pegarTodos)

app.get('/livros/:id', livroControlador.pegarPeloId)

app.listen('3000')