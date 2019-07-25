const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fs = require('fs');
const app = express();

const csv=require('csvtojson');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.listen(3001, () => {
    console.log('Express server is running on localhost:3001');
    // readCSV();
    csvToJson();
  }
);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

function readCSV(){
  const fileName = './server/data.csv';
  fs.readFile(fileName, 'utf8', function (err, data) {
    if (err){
      return console.log(err);
    }else{
      console.log('CSV read: ');
      console.log(data);
    }
  return data;
  });
}

function csvToJson(){
console.log('Inside csvToJson');

  const fileName = './server/data.csv';
  csv()
    .fromFile(fileName)
    .then((jsonObj)=>{
      console.log(jsonObj);
    })
}