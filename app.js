var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var graphQLHTTP = require('express-graphql');
var graphql = require ('graphql').graphql;
var Schema = require('./build/graphql');

// var query = 'query { todos { id, title, completed } }'
// graphql(Schema, query).then( function(result) {
//   console.log(JSON.stringify(result));
//   // Prints
//   // {
//   //   "data":{
//   //     "todos":[
//   //       {
//   //         "id":1446412739542,
//   //         "title":"Read emails",
//   //         "completed":false
//   //       },
//   //       {
//   //         "id":1446412740883,
//   //         "title":"Buy orange",
//   //         "completed":true
//   //       }
//   //     ]
//   //   }
//   // }
// });


// routes
// var locations = require('./routes/locations');


var app = express();

app.use('/graphql', graphQLHTTP({ schema: Schema, pretty: true }))


// serve index.html
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });


//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public')); // couldn't find skeleton without this


// routes
// app.use('/api/locations', locations);


module.exports = app;
