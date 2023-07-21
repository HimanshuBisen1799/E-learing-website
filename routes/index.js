var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',);
});
router.get('/user', function(req, res, next) {
  res.render('userform',);
});
router.post('/create', function(req, res, next) {
  userModel.create({
    name:  req.body.username,
    email:  req.body.email,
    phone:  req.body.phone,
    cname: req.body.Course,
    image: req.body.img

  }).then(function(createduser){
     res.send(createduser)
  })
});
router.get('/find', function(req, res, next) {
  userModel.find()
  .then(function(allusers){
       res.render("feed",{allusers})
  })
});


// router.get('/find', function(req, res, next) {
//   res.render('card',);
// });
module.exports = router;
