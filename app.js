const express = require('express');
const request = require('request');
const fs = require('fs');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log('app listening on port ' + port);
})
