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
        axios.post('http://172.17.0.2:10000/eventos', {
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

app.listen(7000, async () => {
    console.log("Classificação. Porta 7000.")
    const {data} = await axios.get('http://172.17.0.2:10000/eventos')
    data.forEach((evento, indice, colecao) => {
        try {
            funcoes[evento.tipo](evento.dados)
        } catch (err) {}
    })
});