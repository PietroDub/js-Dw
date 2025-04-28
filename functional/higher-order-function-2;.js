// function finalPrice(tax) { return{}
//     return price * (1 + tax)
// }

// console.log(finalPrice(0.0875, 25.1))
// console.log(finalPrice(0.0875, 21.1))
// console.log(finalPrice(0.0875, 102.1))

//Com curring, retornando uma função como parâmetro, dentro de outra função

function finalPrice(tax) {
    return function(price){
   return price * (1 + tax)
}
}

console.log(finalPrice(0.0875) (25.1))
console.log(finalPrice(0.0875) (21.1))
console.log(finalPrice(0.0875) (102.1))

const nyFinalPrice = finalPrice(0.0875)
console.log(nyFinalPrice(50))