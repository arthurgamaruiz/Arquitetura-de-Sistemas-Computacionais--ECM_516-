const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json()) //middleware

const lembretes = { }
let id = 0
/*
{
	1: {
		id: 1,
		texto: 'fazer cafe'
	},
	2: {
		id: 2,
		texto: 'Natacao'
	}
}
*/

app.get('/lembretes', (req, res) => {
	res.json(lembretes)
})

app.post('/lembretes', async (req, res) => {
    // incrementar o id 
    // extrair propriedade texto do corpo da requisicao
    // cadastrar na base, tal qual mostra o exemplo
    // responder trocando o status para 201 e, no corpo, incluir o lembrete criado
    id++
    const { texto } = req.body
    const lembrete = {
        id,
        texto
    }
    lembretes[id] = lembrete

    await axios.post('http://localhost:10000/eventos', {
        tipo : "LembreteCriado",
        dados : lembrete
    })

    res.status(201).json(lembrete)
      
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

const port = 4000
app.listen(port, () => {
	console.log(`Lembretes. Porta ${port}.`)
})