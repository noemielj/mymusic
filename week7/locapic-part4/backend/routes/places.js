var express = require("express");
var router = express.Router();

require("../models/connection");
const Place = require("../models/places");

router.get("/", (req, res) => {
  res.json({ result: true });
});

// ajout d'un marqueur en BDD
router.post("/", (req, res) => {
  const { nickname, name, latitude, longitude } = req.body;

  const newPlace = new Place({
    nickname: nickname,
    name: name,
    latitude: latitude,
    longitude: longitude,
  });
  newPlace.save();
  res.json({ result: true });
});

// récupération des marqueurs utilisateurs

router.get("/:nickname", (req, res) => {
  Place.find({ nickname: req.params.nickname }).then((places) => {
    res.json({ result: true, places: places });
  });
});

// suppression d'un marqueur à partir de son nom et surnom
router.delete("/", (req, res) => {
  const { nickname, name } = req.body;

  Place.deleteOne({ nickname, name }).then((deletedDoc) => {
    if (deletedDoc.deletedCount > 0) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: "Place not found" });
    }
  });
});

module.exports = router;
