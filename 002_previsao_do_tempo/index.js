const axios = require('axios')
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = 'Itu'
const cnt=1;
const units = 'metric'
const lang = 'pt_br'
const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`

axios.get(url)          //processamento assíncrono. Retorna uma promise --> utilizar then e catch
.then(res => {
    console.log(res.data)
    return res.data
})
.then(res => {
    console.log(res.list)
    return res.list
    })
.then(res => {
    console.log(res[0].main.temp_max)
    return res
})
.then(previsoes => {
    //iterar sobre a lista
    for(let previsao of previsoes){
        //exibir a descrição de cada uma 
        console.log(previsao.weather[0].description
        )
    }
})
console.log('A')