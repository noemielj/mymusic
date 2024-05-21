
const mongoose = require("mongoose")

const citieSchema = mongoose.Schema({
    name: String,
    currentPopulation: Number,
    country: {type: mongoose.Schema.Types.ObjectId, ref: 'countries'},
    })

    const Citie = mongoose.model('cities', citieSchema)

    module.exports = Citie

    /*const newCitie = new Citie({
        name: 'Paris',
        currentPopulation: 2160000,
        country: 'France',
        })
       
       newCitie.save().then(() => {
        console.log('Citie save');
       }); */