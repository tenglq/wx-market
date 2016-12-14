var router = require('express').Router()

router.get('/', function(req, res) {
  res.json({
  	session: 'session',
  	test: 'test'
  })
});

module.exports = router;