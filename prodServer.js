var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var logger = require('morgan');
var app = require('./app');
// var models = require('./models');

// logging
// app.use(logger('combined'));


// serve index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'prod_index.html'));
});


// listen on selected port
app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
