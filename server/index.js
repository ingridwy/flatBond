const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const branch = require('./routes/api/branch')
const area = require('./routes/api/area')
const division = require('./routes/api/division')
const client = require('./routes/api/client')
app.use('/api/branch', branch)
app.use('/api/area', area)
app.use('/api/division', division )
app.use('/api/client', client)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server starts on ${port}`))