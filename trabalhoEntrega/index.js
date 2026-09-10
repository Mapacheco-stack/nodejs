import express from "express"
import fs from "fs"

const app = express()
const PORT = 3000

app.get("/itens/:id", (req, res) => {
    const id = Number(req.params.id)


    const item = jogos.find(jogo => jogo.id === id)

    if (item) {
        res.status(200).json(item)
    } else {
        res.status(404).json({
            erro: " Erro 404: O item não pode ser encontrado ou não existe."
        })
    }
})

const jogos = JSON.parse(fs.readFileSync("./dados.json", "utf8"))

app.get("/", (req, res) => {
    res.json({
        "Nome da API": "Trabalho Express",
        "Desenvolvedor": "Matheus"
    });
});

app.get("/itens", (req, res) => {
    res.status(200).json(jogos)
});

app.get("/buscar", (req, res) => {
    const { studio, jogo, ano } = req.query;

    let resultado = jogos;

    if (studio) {
        resultado = resultado.filter(item => item.Studio === studio);
    }

    if (jogo) {
        resultado = resultado.filter(item => item.jogo === jogo);
    }

    if (ano) {
        resultado = resultado.filter(item => item["Ano de lançamento"] === ano);
    }

    if (resultado.length === 0) {
        return res.status(200).json([]);
    }

    res.status(200).json(resultado);
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        erro: "Erro interno do servidor."
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
});