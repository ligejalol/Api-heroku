const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877
app.get('/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Valney'
  })
})
app.get('/about', (req, res) => {
  res.json({
    name: 'Valney',
    email: 'filhovalney@gmail.com',
    urls: [
      {
        type: 'github',
        url: 'https://github.com/valneySantos'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/valneyfx'
      }
    ]
  })
})
app.get('/', (req, res) => {
  res.json({
    msg: 'OKAY!'
  })
})

app.listen(PORT, () => {
  console.log('Escutando na porta: ' + PORT)
})
