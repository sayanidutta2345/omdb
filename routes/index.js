require('custom-env').env()
var express = require('express');
var router = express.Router();
var axios = require('axios');

var OMDB_API_KEY=process.env.OMDB_API ;
var OMDB_URL=process.env.OMDB_URI ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('yes');
  //res.render('index', { title: 'Express' });
});

router.get('/search', (req, res, next) => {
  const title = req.query.title
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
