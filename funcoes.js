function resultado(req, res) {
    res.status(200).json({message:'Esta Funcionando', Variavel: req.query})
}

function novo() {
    console.log(' faz alguma coisa')
    return
}
module.exports = {
    resultado,
    novo
}