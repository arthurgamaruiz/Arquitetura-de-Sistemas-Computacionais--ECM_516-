const axios = require('axios')              //envia requisições http
const express = require('express')          //recebe requisições http

const app = express()                       //objeto app
app.use(express.json())                     //funcção middleware

const eventos = []                          //armazena eventos 

//endpoint POST /eventos 
//extrair evento da requisição
//enviar o evento para ambos os mss de lembretes e observações
//usando a axios 
app.post('/eventos', async (req, res) => {
    const evento = req.body                                             //extraindo o corpo da requisição
    eventos.push(evento)                                                //adiciona evento à lista 
    console.log(evento);                           
    //no material de mss, caminho 4 da Figura 4.3.11
    try{
        await axios.post('http://localhost:4000/eventos', evento)       //envia o evento para o microsserviço de lembretes
    }
    catch(e){}
    try{
        await axios.post('http://localhost:5000/eventos', evento)       //envia o evento para o microsservico de observações
    }
    catch(e){}
    try{
        await axios.post('http://localhost:6000/eventos', evento)       //evento para consulta   
    } 
    catch(e){}
    try{
        await axios.post('http://localhost:7000/eventos', evento)      //evento de classificação
    }
    catch(e) {}
    res.end()
})

//endoint para obter eventos 
app.get('/eventos', (req, res) => {
    res.json(eventos)
})
//colocar o barramento de eventos em funcionamento na porta 10000
const port = 10000
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta: ${port}`)
})
