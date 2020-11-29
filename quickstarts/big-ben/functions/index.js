'use strict';

const functions = require('firebase-functions');
const express = require('express');
const app = express();

const cors = require('cors')({ origin: true });
app.use(cors);

app.get('/', (req, res) => {

  res.send(`
  <!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      <p>Hello world</p>
    </body>
  </html>`);
});

app.get('/api', (req, res) => {

  res.json({ bongs: 'BONG ' });
});

exports.app = functions.https.onRequest(app);
