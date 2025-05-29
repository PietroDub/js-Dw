let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(["Ana", "Bia", "Carlos", "Daniel"])
})

console.log(p)
//passa apenas 1 parâmetro

p.then(function(valor){
    console.log(valor)
})

p
    .then()
    .then(primeiro =>primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letreMinuscula => console.log(letreMinuscula))