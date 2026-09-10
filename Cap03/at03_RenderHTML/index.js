import http from 'http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer ((req, res)=>{
    const urlObj = new URL(req.url, `https://${req.headers.host}`)

    let pagina = urlObj.pathname.substring(1)
    pagina = pagina === ''?'index.html':pagina

    if (!pagina.includes('html')){
        pagina += '.html'
    }
    let CaminhoArquivo = path.join(__dirname, pagina)

    if(fs.existsSync(CaminhoArquivo, )){
        fs.readFile(CaminhoArquivo, (err, data)=>{

            if(err){
                res.writeHead(500, {'Content-Type': 'text/html'})
                return res.end('<h1>Erro interno do servidor</h1>')
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
    else{
        CaminhoArquivo = path.join(__dirname, 'pg404.html')
        fs.readFile(CaminhoArquivo, (err, data)=>{
            res.writeHead(404, {"content-type": 'text/html'})
            res.end(data)
        })
    }

})

server.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})