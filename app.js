const express = require('express')
const app = express()
const port = 3000

const {cities} = require('./cities')
const weatherInfo = require('./weather-info')


app.get('/', (req, res) => {
    res.send('City Info')
})

app.get('/city-info', async (req, res) => {
    let citiesInfo = []
    await Promise.all(
        cities.map(async city => {
            await weatherInfo(city)
            .then((response) => {
                citiesInfo.push(response)
            })
        })
    )
    res.json(citiesInfo)
})

app.listen(port, () => {
    console.log(`Backend city-info listening on port ${port}`)
})