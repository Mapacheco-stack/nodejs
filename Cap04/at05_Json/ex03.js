const bancoDeDadosFicticio = `[
    {"id":1,"nome": "Matrix", "Ano": 1999}
    {"id":2,"nome": "Senhor dos Aneis", "Ano": 2001}
    {"id":3,"nome": "Incepticon", "Ano": 2010}
]`

const filmes = JSON.parse(bancoDeDadosFicticio)

const filmeBuscado = filmes.find(filme=> filme.id ===2)
console.log(filmeBuscado)