/*
* Functions that operate on other functions,
* either by taking them as arguments or by
* returning them, are called higher-order functions.
*/
/*
* Higher-order functions são funções que operam sobre
* outras funções, seja recebendo-as como argumentos ou
* retornando-as como resultado.
*/

function run(fn){
    fn()
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

run(function(){
    console.log("run !!")
})

const result = run(Math.random)
console.log(result)