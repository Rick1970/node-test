const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {

  var rick = {name: 'Rick', age: 46};
  var sam = {name: 'Sam', age: 45};
  var rudy = {name: 'Rudy', age: 42};
  var users = [rick, sam, rudy];
  res.status(200).send(users);
});

app.listen(3000, () => {
  console.log('Express server is on port 3000');
});

module.exports.app = app;
