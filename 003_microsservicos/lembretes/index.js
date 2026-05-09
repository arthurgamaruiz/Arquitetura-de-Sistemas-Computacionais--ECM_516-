const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json()) //middleWare

let id = 0
const lembretes = { } //definindo a base de dados volátil num primeiro momento, foco na arquitetura
/*
{
    1: {
        id: 1,
        texto: "fazer café"
        },
    2: {
        id: 2,
        texto: "Natação"
        }
}
*/
app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

app.post('/lembretes', async (req, res) => {
    //incrementar o id
    id += 1
    //extrair a propriedade texto do corpo da req
    const { texto } = req.body
    //cadastrar na base tal qual o exemplo
    lembretes[id] = {
        id: id,
        texto: texto
    }
    await axios.post('http://localhost:10000/eventos', {
        tipo: "LembreteCriado", 
        lembretes: lembrete
    })
    //responder trocando o status para 201 e, no corpo, concluir o lembrete criado
    res.status(201).json(lembretes[id])
})

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Executando na porta: ${port}.`)
})