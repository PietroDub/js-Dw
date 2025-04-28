const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(function (el){
    return el * 2
})

console.log(numbers)
console.log(numbersV2)

const students = [
    {name: "Ana", score: 6.4 },
    {name: "Jack", score: 8.6},
    {name: "Peter", score: 10},
    {name: "Emma", score: 2.5}
]

const getScore = el => el.score

console.log(students.map(getScore))
const result = students
        .map(getScore) //armazena a nota
        .map(Math.ceil) //arredonda pra cima

console.log(students, result)