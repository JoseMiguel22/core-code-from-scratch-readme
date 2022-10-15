const express = require('express')
const api = express()
const port = 3001

api.get('/ping', (req, res) => {
    res.send({ message: "pong"})
})

api.get('/pong', (req, res) => {
    res.send({ message: "ping"})
})

api.listen(port, () => {
    console.log("API IS RUNNING\n")
})