const express = require ('express')
const rotas = express()


// livros
app.get('/', (req,res) => {
    response.send('Servidor rodando')
})

rotas.get('/livros', livroControlador.pegarTodos)

rotas.get('/livros/:id', livroControlador.pegarPeloId)

rotas.post('/livros', livroControlador.criar)

rotas.put('/livros/:id,', livroControlador.substituir)

rotas.patch('/livros/:id,', livroControlador.alterar)


//autores

//bibliotecarios


module.exports = rotas