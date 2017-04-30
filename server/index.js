const compression = require('compression')
let express = require('express')
const path = require('path')
const fs = require('fs')
let app = express()
let SecretSanta = require('./lib/secret-santa.js')

app.use(compression())
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.redirect('/index.html')
})

app.get('/matches', (req, res) => {
  let users = require('./data/users.json')
  let matches = SecretSanta.getMatches(users.users, 'guid')

  res.send(matches)
})

app.listen(3000)
