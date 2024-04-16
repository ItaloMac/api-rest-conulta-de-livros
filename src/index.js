const express = require('express')
const {livros} = require('./bancodedados')
const rotas = require('./rotas')

const app = express()

app.use(express.json())
app.use(rotas)

app.listen('3000')