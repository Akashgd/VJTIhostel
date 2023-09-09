const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
const app = express();



connectToMongo();
const port = 5000;

app.use(cors())
app.use(express.json());

//available routes
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`VJTI Hostel app is listening on port ${port}`);
});