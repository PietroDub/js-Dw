//como chamar uma função anonima
// IIFE - Immediately Invoked Function Expression

(function (a, b, c) {
    let x = 102
    console.log(`Result ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

// quando criada dentro de uma função ou estrutura, a var pode se repetir

(function (a, b, c){
    let x = 4
    console.log(x)
})(1, 2, 3);
