//Function declaration (crir funções)

function sayhello(){
    console.log("Hello!")
}

sayhello()

function sayhelloTo(name){
    console.log("hello " + name)
}

sayhelloTo("Mike")

function returnHi() {
    return "Hi!"
}

let greeting = returnHi()

console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo("john"))