const express = require('express'),
    port = 8080
    api = express()
    

api.get('/api/age/:name', (req, res) => {
    const name = req.params.name
    const age = ageRandom()
    const result = {
        name: name,
        age: age,
        days: convertDays(age)
    }
    res.send(result)
})

api.get('/api/age/', (req, res) => {
    res.send({ error: `Missing parameter 'name' was expected.` })
})

const ageRandom = () => {
 min = Math.ceil(1);
 max = Math.floor(99);
  return Math.floor(Math.random() * (max - min) + min);
}

const convertDays = (age) => {
    return Math.floor(age * 365)
}

api.listen(port, () => {
    console.log(`API is running on port: ${port}`)
})