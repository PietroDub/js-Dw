const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99}, 
    {nome: 'Caderno', qtde: 6, preco: 8.99}, 
    {nome: 'Tesoura', qtde: 7, preco: 9.99}, 
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}


const totalGeral = carrinho 
.map(getTotal)
.reduce(somar, 0)

console.log(totalGeral)