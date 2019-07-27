const express = require('express');
const request = require('request')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs');
const app = express();
const _ = require('lodash');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.static('public'));

app.listen(3001, () => {
    console.log('Express server is running on localhost:3001');
  }
);

app.get('/data', (req, res) => {
  request('http://localhost:3000/data.csv', (error, response, body) => {
    res.send(csvToJson(body));
  });
});

const csvToJson = (csv) => {
  const content = csv.split('\n');
  const header = content[0].split(',');
  return _.tail(content).map((row) => {
    return _.zipObject(header, row.split(','));
  });
}

