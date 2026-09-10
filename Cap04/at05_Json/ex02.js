const novoAluno = {
    nome: "Carlos",
    Curso: "Técnico em informática",
    UC: 13,
    ensinoMedComp:true
}

const dadosTratados = JSON.stringify(novoAluno, null, 4)

console.log(dadosTratados)