const axios = require('axios')
const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const oberservacoesPorLembreteId = {}

// :id é um placeholder
//exemplo: lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(oberservacoesPorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4()
    const {texto} = req.body
    const id = req.params.id

    const oberservacoesDoLembrete = oberservacoesPorLembreteId[id] ||  []
    oberservacoesDoLembrete.push({id: idObs, texto})
    oberservacoesPorLembreteId[id] = oberservacoesDoLembrete
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'OberservacaoCriada',
        dados: {
            id: idObs, texto: texto, lembreteId: id
        }
    })
    res.status(201).send(oberservacoesDoLembrete)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

app.listen(5000, (() => {
    console.log('Observações. Porta 5000.')
}))