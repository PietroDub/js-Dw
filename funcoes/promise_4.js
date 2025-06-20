function gerarNumerosEntre(min, max, tempo) {
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
        const aleatorio = (Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 400),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 10000),
        gerarNumerosEntre(1, 60, 100),
    ])
}

console.time('promise')

gerarVariosNumeros()
.then(console.log)
.then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
})
