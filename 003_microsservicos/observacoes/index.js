const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

//base volátil
const observacoesPorLembreteId={}

//:id é um placeholder
//exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []) //retorna o objeto ou uma lista vazia 
})

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const {texto} = req.body
    const id = req.params.id

    const observacoesDoLembrete = observacoesPorLembreteId[id] || [];
    observacoesDoLembrete.push({id: idObs, texto})                  //adiciona ao final do vetor
    observacoesPorLembreteId[id] = observacoesDoLembrete;           //atualiza com a nova observação
    res.status(201).send(observacoesDoLembrete)

})

app.listen(5000, () => {
    console.log("Lembretes. Porta 5000");
})