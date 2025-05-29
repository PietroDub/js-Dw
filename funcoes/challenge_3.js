const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            path.resolve(conteudo.toString())
        })
        console.log("depois de ler")
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
.then(conteudo => console.log(conteudo.split('\n'))
.then(linhas => console.log(linhas.join(',')))
.then(conteudo => `O valor final é: ${conteudo}`))
