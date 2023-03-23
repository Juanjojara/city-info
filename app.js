const express = require('express')
const app = express()
const port = 3000

const {cities} = require('./cities')


app.get('/', (req, res) => {
    res.send('City Info')
})

app.get('/city-info', (req, res) => {
    res.json(cities)
})

app.listen(port, () => {
    console.log(`Backend city-info listening on port ${port}`)
})