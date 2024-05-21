const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://noemielouisjoseph1:55y2PE5HHOVoRBcy@noemielj.2oztgqt.mongodb.net/myoldfriendmongoose';

mongoose.connect(connectionString, {connectTimoutMS: 10000})
.then(() => console.log("Database Connected"))
.catch(error => console.log(error))

module.exports = connectionString; // Do not edit/remove this line