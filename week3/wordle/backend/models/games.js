const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  word: {
    type: String,
    require: true,
  },

  datePlay: {
    type: Date,
    default: Date.now,
  },
});

const Game = mongoose.model("games", gameSchema);

module.exports = Game;
