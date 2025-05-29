function funcionarOuNão(valor, chanceErro){
    return new Promise ((resolve, reject) => {
    try{
        con.log('temp')
        if(Math.random() < chanceErro ) {
            reject('Ocorreu um Erro!')
        } else {
            resolve(valor)
        }
    }
       catch(e){
        reject(e)
    } 
    })
}

funcionarOuNão('testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`erro: ${err}`))
    .then(() => console.log('Fim!'))