const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99}, 
    {nome: 'Caderno', qtde: 6, preco: 8.99}, 
    {nome: 'Tesoura', qtde: 7, preco: 9.99}, 
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0

const itensValido = carrinho
.filter(qtdeMaiorQueZero)
.map(getNome)

console.log(itensValido)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for(let i = 0; i < this.length; i++){
       if(fn(this[i], i, this)) {
         novoArray.push(this[i])
       }
    }

    return novoArray
}

const itensValido2 = carrinho
.filter(qtdeMaiorQueZero)
.map(getNome)
console.log(itensValido2)