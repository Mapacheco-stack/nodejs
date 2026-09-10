const jsonRecebido = `{
    "Nome: "Maria"
    "Curso": "Técnico em informática",
    "UC": 13
}`

console.log(jsonRecebido)

const objTransformado = JSON.parse(jsonRecebido)

console.log(objTransformado)