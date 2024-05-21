const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://noemielouisjoseph1:55y2PE5HHOVoRBcy@noemielj.2oztgqt.mongodb.net/song'


const songSchema = mongoose.Schema({
    annoying: Boolean,
    artist: String,
    creationDate: Date,
    title: String,
   });

   const Song = mongoose.model('songs', songSchema);

   module.exports = Song;


Song.find().then(data => { console.log(data); });

const newSong = new Song({
    annoying: true,
    artist: "Maria Carey",
    creationDate: new Date(),
    title: "All I want for Christmas Is You",
});

newSong.save().then(newDoc => {
 console.log(newDoc);
});