const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Olá!')
})

module.exports = app
