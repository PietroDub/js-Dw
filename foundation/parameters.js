function logParams(a, b, c){
    console.log(a, b, c)
}
logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)

function DefaultParams(a = 0, b = 1, c = 0){ //define como zero caso não tenha especificação
    console.log(a, b, c)
}
DefaultParams(7, 5, 2)
DefaultParams(7, 5)
DefaultParams(7)
DefaultParams()

//Array

function logNums(nums) {
    for( let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3])

//Spread / rest ...


function logNums2(...nums) {
    console.log(nums)
}

logNums2(1, 2, 3)

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 4, 67, 10))