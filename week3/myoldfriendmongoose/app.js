require('./models/connection');
const Country = require('./models/countries');
const City = require('./models/cities');
const populationSchema = require('./models/countries');


// Create country with name, flag image, currency and population
function createCountry(name, flagImg, currency, population) {
    const newCountry = new Country({
        name: name,
        flagImg: flagImg,
        currency: currency,
        population: population
    });
    
    newCountry.save()
    .then(() => {
        console.log('Country created');})
}
 createCountry('Australia', 'australia.png', 'AUD', [{ populationNbr: 25400000, year: new Date('2015-08-24') }]);

// Sample call:
// createCountry('Australia', 'autralia.png', 'AUD', [
//  { populationNbr: 25400000, year: new Date('2015-08-24') },
// ]);


// Create city with name, population and country foreign key
function createCity(name, currentPopulation, countryId) {
    const newCity = new City ({
        name: name, 
        currentPopulation: currentPopulation,
        country: countryId,
    })
    newCity.save()
    .then(() => {
        console.log('City created');})
 }
 createCity('Sydney',5312163, '65e5c718616b8d50dc55a73d');
// Sample call:
// createCity('Sydney', 5312163, 'COUNTRY_ID_TO_REPLACE');


// Display country population from country name
function displayCountryPopulation(countryName) {
    Country.findOne({ name: countryName })
    .then(data => {
        console.log(`Population de ${countryName} =>`, data);
    })
 }
 displayCountryPopulation('Australia');

// Display country informations from city name (with populate)
function displayCountryFromCityName(cityName) {
    City.findOne({ name: cityName })
    .populate('country')
 .then(data => {
   console.log('COUNTRY =>', data);
 });
 }
 displayCountryFromCityName('Sydney')

module.exports = { createCountry, createCity, displayCountryPopulation, displayCountryFromCityName }; // Do not edit/remove this line
