
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99}, 
    {nome: 'Caderno', qtde: 6, preco: 8.99}, 
    {nome: 'Tesoura', qtde: 7, preco: 9.99}, 
]

Array.prototype.meuMap = function(fn) {
    const mapped = []
    for (let i = 0; i < this.length; i ++) {
        mapped.push(fn(this[i], i, this))
    }
    return mapped
}