var express = require('express');
var router = express.Router();

const OWM_API_KEY = process.env.API_KEY
console.log(OWM_API_KEY)

router.get('/articles', (req, res) => {
 fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${OWM_API_KEY}`)
 .then(response => response.json())
 .then(apiData => {
    res.json({ articles: apiData.articles});
 });
});



module.exports = router;
