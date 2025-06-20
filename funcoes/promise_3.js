function gerarNumerosEntre(min, max) {
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = (Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 30)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)