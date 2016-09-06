var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var graphQLHTTP = require('express-graphql');
var graphql = require ('graphql').graphql;
var Schema = require('./build/graphql');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


var sessionOptions = {
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: "mongodb://neil:supanore@ds019766.mlab.com:19766/test_sessions"
  })
}

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

app.use(session(sessionOptions));

var pathSkipList = [
  '/__webpack_hmr',
  '/normalize.css',
  '/skeleton.css',
  '/bundle.js',
  '/bundle.js.map',
  '/favicon.ico'
]



app.use('/graphql', graphQLHTTP({ schema: Schema, pretty: true }))

// serve index.html
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });


// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public')); // couldn't find skeleton without this
app.use('/dist', express.static('public'));

var models = require('./build/db/models')
var Inspection = models.Inspection

  // models.Inspection.find({}, function(err, inspections){
  //   console.log(inspections)
  // })

// routes
app.post('/api/inspections/create', function(req, res){
  var newInspection = Inspection(req.body.newInspection)

  newInspection.save( function(err, inspection){
    if (err) throw err;
    res.json(inspection);
  })
});

app.get('/api/inspections/count', function(req, res){
  Inspection.count({}, function(err, count){
    res.json({ total: count })
  })
})

app.get('/api/inspections/:id', function(req, res){
  Inspection.findById(req.params.id, function(err, inspection){
    res.json(inspection)
  })
});

app.put('/api/inspections/:id', function(req, res){
  Inspection.findByIdAndUpdate(req.params.id, { $set: req.body.editedInspection}, { new: true }, function(err, inspection){
    res.json(inspection)
  })
});

app.delete('/api/inspections/:id', function(req, res){
  res.send('OK')
});

app.get('/api/inspections/search/:text', function(req, res){
  Inspection.find({ $text: { $search: req.params.text } }, function(err, inspections){
    res.json(inspections)
  })
});



module.exports = app;
