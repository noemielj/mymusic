var express = require('express');
var router = express.Router();

let trips = [{ departure: 'Paris', arrival: 'Lyon' }, { departure: 'Lyon', arrival: 'Marseille' }];

router.post('/trips', (req, res) => {
    const newTrips = { departure : req.body.departure, arrival : req.body.arrival};
    trips.push(newTrips);
    res.json({allTrips: trips});
   });

// POST /trips - Sample result: 
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]

router.get('/trips', (req, res) => {
    trips.push({ departure : req.body.departure, arrival : req.body.arrival});
    res.json({ allTrips: trips });
   });
// GET /trips - Sample result:
// "allTrips": [
//   {
//     "departure": "Paris",
//     "arrival": "Lyon"
//   },
//   {
//     "departure": "Lyon",
//     "arrival": "Marseille"
//   },
//   {
//     "departure": "Grenoble",
//     "arrival": "Strasbourg"
//   }
// ]
router.get('/lastTrip', (req, res) => {
  res.json({ lastTrip: trips[trips.length -1] });
});
// GET /lastTrip - Sample result:
// "lastTrip": {
//   "departure": "Grenoble",
//   "arrival": "Strasbourg"
// }

router.delete('/trips', (req, res) => {
    trips = [];
    response.json({ allTrips: trips});
})
// DELETE /trips - Sample result:
// "allTrips": []

module.exports = router;