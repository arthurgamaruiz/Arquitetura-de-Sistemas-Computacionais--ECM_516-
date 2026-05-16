const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json()) //middleware

const lembretes = { }
let contador = 0
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
	res.send(lembretes)
})

app.post('/lembretes', async (req, res) => {
    // incrementar o id 
    // extrair propriedade texto do corpo da requisicao
    // cadastrar na base, tal qual mostra o exemplo
    // responder trocando o status para 201 e, no corpo, incluir o lembrete criado
    contador++
    const { texto } = req.body
    lembretes[contador] = {contador, texto}
    await axios.post('http://localhost:10000/eventos', {
        tipo : "LembreteCriado",
        dados: {contador, texto}
    })

    res.status(201).send(lembretes[contador])
      
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