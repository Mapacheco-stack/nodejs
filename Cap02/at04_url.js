const url = require('url')
let uri = 'https://www.google.com/search?q=node+js&rlz=1C1GCEU_pt-PTBR1200BR1201&oq=node&gs_lcrp=EgZjaHJvbWUqDQgBEAAYgwEYsQMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDIKCAMQABixAxiABDINCAQQABiDARixAxiABDIQCAUQABiDARixAxiABBiKBTIKCAYQABixAxiABDIKCAcQABixAxiABDIQCAgQABiDARixAxiABBiKBTIHCAkQABiABNIBCjc2OTk0ajBqMTWoAgiwAgHxBR8msLqXQy4S&sourceid=chrome&ie=UTF-8'
let partUrl = new URLSearchParams.URL(uri)
console.log('Domínio: ', PartUrl.host)
console.log('Caminho ou rota: ', PartUrl.pathname)
console.log('Query String: ', PartUrl.search)
console.log('Apenas parâmetro: ', PartUrl.searchParams)
console.log('Valor do parâmetro q: ', PartUrl.searchParams.get('q'))
console.log('Domínio: ', PartUrl.searchParams.get('rlz'))