const connectToMongo = require('./db');
//Importing db to use connectMongo function
const express = require('express');
var cors = require('cors')
//Calling the function to connect to the database
connectToMongo();
//Importing express
var app = express()
app.use(cors())
//we can use any port number
const port =5000
//Home route
app.get('/', (req, res) => {
  //Sending response to the client
  res.send('Hello World!')
})
//Middleware
app.use(express.json());
//Available routes to use 
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
//Listening  to the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})