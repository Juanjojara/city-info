const axios = require('axios')

async function addWeatherInfo(city){
    const config = {
        /* Your settings here like Accept / Headers etc. */
    }
    
    return await new Promise((resolve, reject) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&appid=8d95d90347337455ac1ccd658337b2aa'
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
    /*await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=8d95d90347337455ac1ccd658337b2aa', config)
    .then(function(response) {
        console.log(response.data.weather[0])
        //console.log(response.status)
        //console.log(response.statusText)
        //console.log(response.headers)
        //console.log(response.config)
        return "city"
    });*/

}

module.exports = addWeatherInfo