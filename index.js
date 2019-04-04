const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Olá! <a href="/about">About page</a>')
})
app.get('/about', (req, res) => {
  res.send('Olá about!')
})

app.listen(process.env.PORT || 3000, err => console.log(err))

