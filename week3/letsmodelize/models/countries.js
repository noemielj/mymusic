
const mongoose = require("mongoose");


const populationSchema = mongoose.Schema({
    populationNbr: Number,
    year: Date,
})
const countrySchema = mongoose.Schema({
    name: String,
    flagImg: String,
    currency: String, 
    population: [populationSchema],
       });

   const Country = mongoose.model('countries', countrySchema);

   module.exports = Country;

   /*const countrySchema = mongoose.Schema({
    name: 'France',
    flaglmg: 'flag-france.jpg',
    population: [
        { number: 65124000, date: new Date() },
        { number: 64821000, date: new Date() },
        { Number: 64737000, date: new Date() },
        { Number: 65639000, date: new Date() },
        { Number: 64468000, date: new Date() },
      ],
    })*/

   
