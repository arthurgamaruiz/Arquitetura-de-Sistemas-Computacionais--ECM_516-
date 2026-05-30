const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())
const palavraChave = 'importante'

const funcoes  = {
    ObservacaoCriada: (observacao) => {
        observacao.status = 
            observacao.texto.includes(palavraChave)
        ? 'importante'
        : 'comum'
        axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoClassificada', 
            dados: observacao
        });
    }
};

app.post('/eventos', (req, res) => {
    try{
    funcoes[req.body.tipo](req.body.dados)
    
    }
    catch(e){}
    res.status(200).send({msg: 'ok'})
})

app.listen(7000, () => {
    console.log("Classificação. Porta 7000.")
    const {data} = axios.get('http://localhost: 10000/eventos')
    data.array.forEach((evento, indice, colecao) => {
        try {
            funcoes[evento.tipo](evento.dados)
        } catch (err) {}
    })
});