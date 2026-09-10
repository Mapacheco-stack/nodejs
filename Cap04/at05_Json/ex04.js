const jogadores = `[
   {"id": 1, "jogador": "Neymar", "Seleção": "Brasil"},
   {"id": 2, "jogador": "Vini Jr", "Seleção": "Brasil"},
   {"id": 3, "jogador": "Endrick", "Seleção": "Brasil"},
   {"id": 4, "jogador": "Rayan", "Seleção": "Brasil"},
   {"id": 5, "jogador": "Messi", "Seleção": "Argentina"}, 
   {"id": 6, "jogador": "Cristiano Ronaldo", "Seleção": "Portugal"} 
]`

const objJogadores = JSON.parse(jogadores)

const brasil = objJogadores.filter(jogador=> jogador.selecao ==="Brasil")

console.log (brasil)