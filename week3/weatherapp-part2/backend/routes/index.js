var express = require('express');
var router = express.Router();
require('../models/connection');
const fetch = require('node-fetch');

const OWM_API_KEY = "80f1db2fc95149673e547a15555765b7"
let weather = [
  { cityName: "London", description: "cloudy", main: "clouds", tempMin: 12.95, tempMax: 17.39 },
  {
    cityName: "Rio de Janeiro",
    main: "clear",
    description: "sunny",
    tempMin: 23.98,
    tempMax: 28.63,
  },
  {
    cityName: "Stockholm",
    description: "sunny",
    main: "clear",
    tempMin: 6.03,
    tempMax: 10.59,
  },
];


router.post('/weather', (req, res) => {
if (!weather.some(e => e.cityName.toLowerCase() == req.body.cityName.toLowerCase())) {
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${OWM_API_KEY}&units=metrics`)
 .then(response => response.json())
 .then(apiData => {
   const newCity = {
     cityName: apiData.name,
     main: apiData.weather[0].main,
     description: apiData.weather[0].description,
     tempMin: apiData.main.temp_min,
     tempMax: apiData.main.temp_max,
   };

   weather.push(newCity);
   res.json({ result: true, weather: newCity });
 });
} else {
res.json({ result: false, error: "City already saved" });
}
});


 /*if (!weather.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())) {
    const newCity = {
      cityName: req.body.cityName,
      description: req.body.description,
      tempMin: req.body.tempMin,
      tempMax: req.body.tempMax,


    weather.push(newCity);
    res.json({ result: true, weather: newCity });
  } else {
    res.json({ result: false, error: 'City already saved' });
  }
});*/

router.get('/weather', (req, res) => {
  res.json({ weather });
});

router.get("/weather/:cityName", (req, res) => {
  const searchedWeather = weather.find(
    e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
  );
  if (searchedWeather) {
    res.json({ result: true, weather: searchedWeather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});

router.delete("/weather/:cityName", (req, res) => {
  const searchedWeather = weather.find(
    e => e.cityName.toLowerCase() === req.params.cityName.toLowerCase()
  );
  if (searchedWeather) {
    weather = weather.filter(
      e => e.cityName.toLowerCase() !== req.params.cityName.toLowerCase()
    );
    res.json({ result: true, weather });
  } else {
    res.json({ result: false, error: "City not found" });
  }
});

module.exports = router;
