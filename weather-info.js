const axios = require('axios')

async function addWeatherInfo(city){
    const config = {
        /* Your settings here like Accept / Headers etc. */
    }
    
    return await new Promise((resolve, reject) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&appid=' + process.env.WEATHER_API_KEY
        //console.log(url)
        axios.get(url, config)
        .then(function (response) {
            console.log(city.name)
            console.log(response.data.weather[0])
            resolve(response.data.weather[0])
        }).catch(function (error) {
            reject({ "error": error })
        });
    })

}

module.exports = addWeatherInfo