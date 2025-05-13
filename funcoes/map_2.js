const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99}, 
    {nome: 'Caderno', qtde: 6, preco: 8.99}, 
    {nome: 'Tesoura', qtde: 7, preco: 9.99}, 
]
const nome =  item => item.nome
console.log(carrinho.map(nome))

const GetQtde =  item => item.qtde
console.log(carrinho.map(GetQtde))

const getTotal = item =>  item.qtde + item.preco
const totais = carrinho.map(getTotal)