const axios = require('axios')
const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const oberservacoesPorLembreteId = {}

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const observacoes = 
            oberservacoesPorLembreteId[observacao.lembreteId]
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id)      // procura o id da observação   
        obsParaAtualizar.status = observacao.status                                 //atualiza o status da observação
        //gera evento e envia ao barramento
        axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoAtualizada', 
            dados:{
                id: observacao.id,
                texto: observacao.texto, 
                lembreteId: observacao.lembreteId, 
                status: observacao.status
            }
        })
    }
}

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
    oberservacoesDoLembrete.push({id: idObs, texto, status: "aguardando"})          //adiciona campo status 
    oberservacoesPorLembreteId[id] = oberservacoesDoLembrete    
    await axios.post('http://localhost:10000/eventos', {
        tipo: 'OberservacaoCriada',
        dados: {
            id: idObs, texto: texto, lembreteId: id, status: 'aguardando'           //adiciona campo status
        }
    })
    res.status(201).send(oberservacoesDoLembrete)
})

app.post('/eventos', (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados)      //busca a função relativa ao tipo específico no objeto funcoes
    } 
    catch(e){}
    res.end()
})

app.listen(5000, (() => {
    console.log('Observações. Porta 5000.')
}))