const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data.json');

app.use(cors());

const popup = data.popup;

app.get('/popup', (req, res) => {
  res.json(popup);
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});