const express = require('express');
const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const app = express();
const port = 8080;

const url = "http://goo.gl/U6v4fE";

request(url, (err, resp, body) => {
  const $ = cheerio.load(body);
  const jobTitle = $(".jobtitle font").text();
  const jobDescription = $(".summary p b").text();
  const jobLocation = $(".location").text();

  //Same as jobTitle: jobTitle, an object
  const obj = { jobTitle, jobDescription, jobLocation }

  console.log(obj);
})

app.listen(port, () => {
  console.log('app listening on port ' + port);
})
