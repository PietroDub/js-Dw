
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true}, 
    {nome: 'Caderno', qtde: 6, preco: 8.99, fragil: true}, 
    {nome: 'Tesoura', qtde: 7, preco: 9.99, fragil: false}
]

//1 - fragil: true
const getFragil = item => item.fragil == true 
const itensFragil = carrinho.filter(getFragil)

console.log(itensFragil)

//2. qtde e preco -> total

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}
const itensTotal = carrinho.map(getTotal)
console.log(itensTotal)

//3. media dos totais

const media = item => (item.qtde * item.preco) / carrinho.length
const itensMedia = carrinho.map(media)
console.log(itensMedia)
