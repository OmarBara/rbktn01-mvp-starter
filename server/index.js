var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');
var session = require('express-session');
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.all('/items', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})


//create user
app.all('/login', function (req, res, next) {
  console.log('Request signin Type:', req.body)
  if ( req.body.username && req.body.password) {
    var userData = {
      username: req.body.username,
      password: req.body.password,
    }

    db.userCreate(userData, function (err, user){
      if (err) {
        return next(err)
      } else {
        return res.redirect('/profile');
      }
    });
  }

  next()
})


app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

