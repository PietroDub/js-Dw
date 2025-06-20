// setTimeout(function(){
//     console.log('Executando callback...')

//     setTimeout(function(){
//          console.log('Executando callback...')  

//           setTimeout(function(){
//            console.log('Executando callback...')   
//       }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

let p = esperarPor(2000)
    .then(() => esperarPor())
    .then(() => esperarPor())