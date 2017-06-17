'use strict';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(port, function () {
  console.log('Example app listening on port: %s', port);
  console.log('You can test it using:')
  console.log('curl $(docker-machine ip):3000');
})