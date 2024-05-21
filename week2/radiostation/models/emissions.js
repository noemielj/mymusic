const mongoose = require('mongoose');


const connectionString = 'mongodb+srv://noemielouisjoseph1:55y2PE5HHOVoRBcy@noemielj.2oztgqt.mongodb.net/radio'
const radioSchema = mongoose.Schema({
    discontinued: Boolean,
    mainAnimator: String,
    name: String,
    nbAnimators: Number,
   });

   const Radio = mongoose.model('radios', radioSchema);

   module.exports = Radio;


Radio.find().then(data => { console.log(data); });

const newRadio = new Radio({
    discontinued: false,
    mainAnimator: "Difool",
    name: "radio Libre",
    nbAnimators: 7,
});

newRadio.save().then(newDoc => {
 console.log(newDoc);
});