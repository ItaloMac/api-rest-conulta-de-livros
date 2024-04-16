const pegarTodos = (req,res) =>{
    return res.json(livros)
}

const pegarPeloId = (req,res) => {
    const {id} = req.params
    const livro = livros.find((l) => l.id === Number(id))

    if(!livro) {
        return res.status(404).json({
            message: "Livro nao encontrado"
        })
    }

    return res,json(livro)
}

const criar = (req,res) => {
    const livro = req.body

    if(!livro.titulo || !livro.autor || !livro.ano || !livro.numPaginas) {
        return res.status(400).json({
            message: "Dados Invalidos"
        })
    }

    const id = criarIdLivro()
    const novoLivro = {id,...livro}
    livros.push(novoLivro)
    return res.status(201).json(novoLivro)
}

module.exports = {
    pegarTodos,
    pegarPeloId
}

module.exports = {
    pegarPeloId,
    pegarTodos,
    criar
}