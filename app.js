const express = require('express');
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const app = express();
const port = 8080;

const url = "http://goo.gl/U6v4fE";

request(url, (err, resp, body) => {
  let $ = cheerio.load(body);
  let jobTitle = $(".jobtitle font").text();
  console.log(jobTitle);
})

app.listen(port, () => {
  console.log('app listening on port ' + port);
})
