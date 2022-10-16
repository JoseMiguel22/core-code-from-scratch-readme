<h1 align="center">Node / Database - Week 12</h1>

## Week goal 🏁

<p>Learn about Databases and their integration with Javascript through Node.JS</p>

## Week challenges (Monday) 💻

1. Work on your project

## Week challenges (Tuesday) 💻

1. Work on your project

## Week challenges (Wednesday) 💻

- [x] 1. [Age Prediction API 👶-👴](./exercises/e00/API-3.md)

[Directory](https://github.com/JoseMiguel22/core-code-from-scratch-readme/tree/main/Directorys/API_Age_Prediction)

```javascript
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
```
- [x] 2. [NSA Secrets Box API - Hacking Challenge 👨‍💻](./exercises/e01/API-4.md)
 
A solution for the exercise was to pass the role validation by sending a function (toString), therefore in the role, due to the nature of JavaScript, it will perform a data conversion and these would alter the behavior of the credential validation, throwing a false in the first conditional, and since the first conditional is false, the validation would return a true and thus we would obtain the credentials.
 
![NSA Secrets Box API 2](https://user-images.githubusercontent.com/108826299/196017716-5c96b573-268d-422b-9e95-1a184e3974e1.png)

![NSA Secret Box](https://user-images.githubusercontent.com/108826299/196018285-079a3d2f-6f38-4ebc-a31d-52bf5d51a222.png)



## Week challenges (Thursday) 💻

1. Work on your project
