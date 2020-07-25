const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const path = require('path');


const app = express();
const uploadsPath = path.resolve(__dirname, '..', 'uploads')

app.use(cors());
app.use(express.json());
app.use(express.static(uploadsPath));
app.use(routes);

app.listen(3333);