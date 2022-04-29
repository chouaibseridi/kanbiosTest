var express = require('express');
var userRouter = express.Router();
var userController = require('../controllers/userController');

userRouter.post('/signup', function(req, res) {
  if (req.body) {
    userController.signUp(req,res);
  } else { 
    res.send('body is null');
  }
});

userRouter.post('/login', function(req, res) {
  if (req.body) {
    userController.login(req,res);
  } else {
    res.send('body is null')
  }
});

module.exports = userRouter;