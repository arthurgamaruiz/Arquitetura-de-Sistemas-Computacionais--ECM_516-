const express = require('express')
const axios = require('axios')
const app = express()

// Definição dos microserviços a monitorar
const microservices = {
  'lembretes': { port: 5000, endpoint: '/lembretes' },
  'consulta': { port: 6000, endpoint: '/eventos' },
  'classificacao': { port: 7000, endpoint: '/eventos' },
  'barramento': { port: 10000, endpoint: '/eventos' }
}

// Função para verificar se um microserviço está rodando
const checkService = async (name, config) => {
  try {
    const url = `http://localhost:${config.port}${config.endpoint}`
    await axios.get(url, { timeout: 2000 })
    return {
      name,
      port: config.port,
      status: 'UP',
      message: 'Microserviço está respondendo'
    }
  } catch (error) {
    return {
      name,
      port: config.port,
      status: 'DOWN',
      message: error.message || 'Microserviço não está respondendo'
    }
  }
}

// Endpoint para obter status de todos os microserviços
app.get('/status', async (req, res) => {
  const results = []
  
  // Fazer requisições paralelas para todos os microserviços
  const promises = Object.entries(microservices).map(([name, config]) => 
    checkService(name, config)
  )
  
  const statuses = await Promise.all(promises)
  
  // Contar quantos estão UP
  const upCount = statuses.filter(s => s.status === 'UP').length
  const downCount = statuses.filter(s => s.status === 'DOWN').length
  
  res.json({
    timestamp: new Date().toISOString(),
    summary: {
      total: statuses.length,
      up: upCount,
      down: downCount
    },
    services: statuses
  })
})

// Endpoint simples para verificar se o health check está rodando
app.get('/ping', (req, res) => {
  res.json({ status: 'Health Check está UP' })
})

// Endpoint para verificar um serviço específico
app.get('/status/:service', async (req, res) => {
  const serviceName = req.params.service
  const config = microservices[serviceName]
  
  if (!config) {
    return res.status(404).json({
      error: `Microserviço '${serviceName}' não encontrado`,
      availableServices: Object.keys(microservices)
    })
  }
  
  const result = await checkService(serviceName, config)
  res.json(result)
})

const port = 3000
app.listen(port, () => {
  console.log(`Health Check. Porta ${port}.`)
  console.log(`Monitorando: ${Object.keys(microservices).join(', ')}`)
  console.log(`GET http://localhost:${port}/status - Verificar todos os microserviços`)
  console.log(`GET http://localhost:${port}/status/:service - Verificar um serviço específico`)
})