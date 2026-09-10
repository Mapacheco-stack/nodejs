const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log ('Olá, mundo')

rl.question('Qual o seu nome? \n', nome=>{
    console.log(`Olá ${nome}`)
    rl.close
})
//rl.question('Qual o seu nome? \n', funcao(nome)=>{
//    console.log(`Olá ${nome}`)
//    rl.close
//})


console.log ('Olá Node!!!')