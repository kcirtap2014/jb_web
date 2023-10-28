var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send_form', function(req, res, next) {
  // res.send('respond with a resource');
  console.log(res)
});

module.exports = router;
