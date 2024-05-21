const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://noemielouisjoseph1:55y2PE5HHOVoRBcy@noemielj.2oztgqt.mongodb.net/blackboard';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

  module.exports = mongoose.connection;