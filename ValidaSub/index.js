const express = require('express')
const app = express()
const port = 3000
app.post('/', (req, res) => {
  const resposta = req.headers
  console.log(resposta)
  res.send(resposta)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
