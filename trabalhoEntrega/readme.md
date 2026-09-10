Projeto: Trabalho de entrega do professor João
Tema: Escolhi o tema de jogos pois gosto muito de jogos desde quando eu era bem criança, principalmente jogos de história, luta, mundo aberto e jogos que dão liberdade para o jogador sentar o dedo de bala nos NPC´s do jogo.

Para conseguuir fazer o serevidor rodar, primeiro usei o "npm init -y" e então instalei a dependencia Express dento da pasta do trabalho. Como requisitado pelas instruções do projeto, também criei um script "start" dentro do arquivo package.json

o / leva pra pagina inicial.
o /itens tras os itens pelo id, basta digitar /itens/"numero aleatorio ai". Se o id não existir, os status da página é convertido para 404 e uma menssagem de erro aparece ao usuário.
o /buscar é mais complexo, mas funciona mais ou menos na mesma, um exempplo de commo usa-lo seria: /buscar?ano=2022. O buscar permite buscar um item por mais de uma propriedeade, ou seja, tambem seria possivel buscar por ano e studio, como no exemplo: /buscar?AnoDeLancamento=2019&Studio=Capcom.

É mais ou menos isso ai, se errei algo, meus mais sinceros perdões.