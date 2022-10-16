const express = require('express')
const api = express()
const port = 3002

api.get('/delay/:time', (req, res) => {
  const time = req.params;

  console.log(time);
  setTimeout(() => {
    res.send({ message: "This a delayed response"})
  }, time);
})


api.listen(port, () => {
    console.log(`listening on port ${port}`)
})