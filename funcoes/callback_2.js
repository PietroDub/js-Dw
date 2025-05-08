//Pegar conteúdo de página

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt') //junta caminhos

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

fs.readFile(caminho, {}, exibirConteudo ) //ler caminhos