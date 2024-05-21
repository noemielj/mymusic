const mongoose = require('mongoose')

const weatherSchema = mongoose.Schema({
    cityName: String,
    main: String,
    description: String,
    tempMin: Number,
    tempMax: Number,
})

const Weather = mongoose.model('weathers', weatherSchema);

module.exports = Weather;