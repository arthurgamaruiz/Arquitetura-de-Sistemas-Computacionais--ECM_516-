const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {};

//mapa de funções -> chaves são os tipos dos respectivos eventos.
const funcoes = {
    //evento de criação do lembrete
    //lembrete nasce sem observações
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.contador] = lembrete
    }, 

    //evento para criação da observação
    ObservacaoCriada: (observacao) => {
        //observacoes é uma chave do lembrete com um id específico
        //ou retorna uma lista existente ou uma vazia 
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []

        //observacoes é uma lista, contendo objetos js com id (ibObs), texto e lembreteId como chaves
        //cadastra uma observação
        observacoes.push(observacao)

        //adiciona a observação na base de consulta 
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    },
    //lida com o evento de observação atualizada
    ObservacaoAtualizada: (observacao) => {
        const observacoes = 
            baseConsulta[observacao.lembreteId]['observacoes']
        const indice = observacoes.findIndex((o) => o.id === observacao.id)
        observacoes[indice] = observacao;
    }
}

//obtém a base completa 
app.get('/lembretes', (req, res) => {
    res.status(200).json(baseConsulta)
})

//recebe eventos 
app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
        //res.status(200).json(baseConsulta)
    }catch(e){}     //descarta evento que não está cadastrado
    res.end()
})

app.listen(6000, () => console.log("Consultas. Porta 6000."))