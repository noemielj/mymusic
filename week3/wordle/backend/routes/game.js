var express = require("express");
var router = express.Router();

const Game = require("../models/games");

const words = [
  "plage",
  "large",
  "marge",
  "pages",
  "liste",
  "tasse",
  "phone",
  "codes",
  "cadre",
  "rouen",
];

router.get("/new", async (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex].toUpperCase();

    // Enregistrer le mot dans la collection Game avec la date de création
    const game = new Game({
      word: randomWord,
      createdAt: new Date(),
    });
    const savedGame = await game.save();

    // Renvoyer les informations
    res.json({
      word: savedGame.word,
      result: "true",
      gameId: savedGame._id,
      wordLength: savedGame.word.length,
    });
  } catch (err) {
    // En cas d'erreur, renvoyer une réponse d'erreur
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
