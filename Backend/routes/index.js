var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    message: 'Welcome to the backend'
  });
});

/* GET hello. */
router.get('/hello', function (req, res, next) {
  res.json({
    message: 'Welcome to the API'
  });
});

router.post('/register', function (req, res, next) {
  res.json({
    message: 'Register' + req.body.name
  });
});

module.exports = router;
