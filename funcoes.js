function resultado(req, res) {
    res.status(200).json({message:'Esta Funcionando', Variavel: req.query})
}

module.exports = {
    resultado
}