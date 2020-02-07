var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/api');
var path = require('path');

var app = express();

var port = process.env.PORT || 5000;

//connect to the database
mongoose.connect("mongodb+srv://test:test01@cluster0-sgksz.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});