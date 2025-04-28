// Create a range function
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

let n1 = 0
let n2 = 0

function range(n1 = 0, n2 = 0) {
    if (n1 > n2){
        while (n1 >= n2) {
            console.log(n1)
            n1 = n1 - 1 
        }
    } else {
        while (n1 <= n2){
            console.log(n2)
            n2 = n2 - 1
        }
    }
}

console.log(range(6, 11))