require('.models/connection')
const Citie = require('/models/cities')
const Country = require('.models/counties')

const newcitie = new Citie({
    name: 'Paris',
    currentPopulation: 2160000,
    country: 'France',
    })
   
   newCitie.save().then(() => {
    console.log('Citie save');
   });

// population
const population = new Population({
   
    population: [
      { Number: 65124000, date: new Date() },
      { Number: 64821000, date: new Date() },
      { Number: 64737000, date: new Date() },
      { Number: 65639000, date: new Date() },
      { Number: 64468000, date: new Date() },
    ],
   });
   
   newPopulation.save().then(() => {
    console.log('Population saved!');
   });
