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

module.exports = {
    pegarTodos,
    pegarPeloId
}

module.exports = {
    pegarPeloId,
    pegarTodos
}