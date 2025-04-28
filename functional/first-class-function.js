/*
* A programming language is said to have
* First-class functions when functions in
* that language are treated like any other
* variable.
*/
/*
* Dizemos que uma linguagem de programação possui
* funções de primeira classe (first-class functions)
* quando as funções são tratadas como variáveis comuns,
* podendo ser atribuídas a variáveis, passadas como
* argumentos ou retornadas de outras funções.
*/

const add = function(a, b) {
    return a + b
}
const sub = function(a,b) {
    return a - b
}
const mult = (a,b) => a * b

const divi = function (a,b){
    return a / b
}

console.log(add(10, 2))
console.log(sub(10, 2))
console.log(mult(10, 2))
console.log(divi(10, 2))