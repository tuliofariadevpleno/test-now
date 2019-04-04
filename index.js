const express = require('express')
const app = express()
const sqlite = require('sqlite')
const path = require('path')

const dbPromise = sqlite.open(path.resolve(__dirname, 'chinook.db'), { Promise })

app.get('/', (req, res) => {
  res.send('Olá! <a href="/about">About page</a>')
})
app.get('/about', (req, res) => {
  res.send('Olá about!')
})
app.get('/artists', async(req, res) => {
  const db = await dbPromise
  const artists = await db.all('SELECT * FROM artists')
  res.send(artists)
})

app.listen(process.env.PORT || 3000, err => console.log(err))

