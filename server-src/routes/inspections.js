var express = require('express')
var router = express.Router();

router.post('/create', function(req, res){
  res.send('OK')
})

module.exports = router
