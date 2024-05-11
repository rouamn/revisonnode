// Import database
var mongoose = require('mongoose');
var configDB = require('./database/mongodb.json');
const express = require('express');
const app = express()

app.set('view engine', 'twig');
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello, Twig!' }); // 'index' is the name of your Twig template file
  });
port = process.env.PORT || 3000;
// Connect to the database before starting the application server.
// Mongo config
const uri = configDB.mongo.uri;
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
    console.log('Connected to DB!!');
})
  })
  .catch((error) => {
    console.error('Error connecting to DB:', error);
  });
  app.use(express.json());

  // Routes
 // const contactsRouter = require("./routes/contacts.js");
  //app.use("/contacts", contactsRouter);

  

