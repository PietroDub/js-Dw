console.log("teste")

//Function Declaration

function bomDia(){
    console.log('Bom dia!')
}

bomDia()

// Function expression
const boaTarde = function () {
    console.log("Boa tarde!")
}

boaTarde() // undefined

function somar (a, b) {
    return a + b
}

const resultado = somar(3, 4) //ignora valores extras e faltando (undefined)
console.log(resultado)

