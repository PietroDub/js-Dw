function bomDia() {
    console.log("Bom dia!")
}

const boaTarde = function () {
    console.log("Boa Tarde!")
}

// Passar uma função como param pra outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === "function"){
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
       return Math.pow(base, exp)
    }
}

const potenciade2 = potencia(2)
console.log(potenciade2(8))

//somar (3) (4) (5)

function soma(n1) {
    return function(n2) {
        return function(n3){
            return n1 + n2 + n3
        }
    }
}

const somarAB = soma (3)(4)
console.log(somarAB(13))
console.log(soma(13)(20)(30))

//calcular (3) (7) (fn)

function calcular(a) {
    return function(b) {
        return function(fn){
            return fn(a, b)
        }
    }
}

function somar(a, b){
    return a + b
}
function subtrair(a, b){
    return a - b
}
function multiplicar(a, b){
    return a * b
}
function dividir(a, b){
    return a / b
}

const restult1 = calcular(10)(5) (subtrair)
const restult2 = calcular(10)(5) (multiplicar)
const restult3 = calcular(10)(5) (dividir)
const restult4 = calcular(10)(5) (somar)
console.log(restult1)
console.log(restult2)
console.log(restult3)
console.log(restult4)