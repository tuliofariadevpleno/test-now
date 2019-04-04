const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Olá!')
})

app.listen(process.env.PORT || 3000, (err) => {
  console.log('listening...', err)
})
