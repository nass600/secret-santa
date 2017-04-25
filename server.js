var express = require('express');
var app = express();
var SecretSanta = require('./src/lib/SecretSanta.js');

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/generate', function (req, res) {
  var users = require('./users.json');
  var matches = SecretSanta.getMatches(users.users, 'guid');

  res.send(matches);
});

app.listen(3000);
