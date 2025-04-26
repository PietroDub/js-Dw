// Function expression
const increment1 = function(n){
    return n + 1
}

// Arrow function always anonymous

const increment2 = (n) => {
    return n + 1
}

console.log(increment1(1))
console.log(increment2(4))

//Simplificação na função arrow, quando só passa 1 parâmetro, n precisa de ()

const increment3 = n =>{
    return n + 1
}

// quando está na msm linha, sem par de {} o retorno já é feito , ent sem return

const increment4 = n => n + 1
