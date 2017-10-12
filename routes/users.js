var express = require('express');
var router = express.Router();
const userModel = require('../database/Models/userSchema');

/* GET users listing. */
router.post('/register', function (req, res, next) {
  userModel.create({ ID: req.body.username }, function (err, docs) {
    if (err) {
      return next(err);
    }
    else {
      res.status(200).json({ "doc": docs });
    }
  })
});

router.post('/login', function (req, res, next) {
  userModel.findOne({ ID: req.body.username }, function (err, doc) {
    if (err) {
      return next(err);
    }
    else {
      if(doc){
      res.status(200).json({ "doc": doc });
      }else{
        res.status(404).json({ "doc": "File Not Found" });
      }
    }
  })
});

module.exports = router;
