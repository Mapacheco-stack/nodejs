const os = require('os')

console.log("processador: ", os.cpus())
console.log("Qtd memória livre: ", os.freemem())
console.log("Diretório do usuário: ", os.homedir())
console.log("Família do S.O: ", os.type())
console.log(process.env)