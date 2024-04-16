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

const substituir = (req,res) => {
    const livro = req.body

    if(!livro.titulo || !livro.autor || !livro.ano || !livro.numPaginas) {
        return res.status(400).json({
            message: "Dados Invalidos"
        })
    }
    
    const {id} = req.params
    
    const livroExistente = livros.find((l) => l.id ===Number(id))
    
    if(!livroExistente) {
        return res.status(404).json({
            mensagem: "Nao existe livro a ser substituido para o id informado"
        })
    }
    
    livroExistente.titulo = livro.titulo
    livroExistente.ano = livro.ano
    livroExistente.autor = livro.autor
    livroExistente.numPaginas = livro.numPaginas

    const novoLivro = {id,...livro}
    livros.push(novoLivro)
    return res.status(201).json({
        mensagem: "Livro substituido"
    })
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