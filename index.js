const PORT = 3000;
const express = require("express");
const apiRoute = require('./routes/api');
const path = require('path');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  'optionsSuccessStatus': 200
}

app.use(cors(corsOptions))

app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => {
  console.log('[+] Server running on port', PORT);
})


