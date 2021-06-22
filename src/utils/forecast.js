const request = require('postman-request')

const forecast = (latitude, longtide, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=25eedfa80cc3697c760039d87e268941&query=' + longtide + ',' + latitude + '&units=f'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const message = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' Degress out. It feels like ' + body.current.feelslike + ' degress out. The humudity is '+ body.current.humidity + "%."
            callback(undefined, message)
        }
    })
}

module.exports = forecast