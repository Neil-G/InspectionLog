var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var bodyParser = require('body-parser');
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// DATABASE
var mongoose = require('mongoose');
mongoose.connect('mongodb://neil:gubipexife@ds019946.mlab.com:19946/engineering_inspections');


var Schema = mongoose.Schema;

var inspectionSchema = new Schema({
  DOB: { type: String, required: true },

	address: {
		line1: { type: String, required: true },
		line2: String,
		city: String,
		state: String,
		zip: String,
	},

	clientType: { type: String, required: true },

	recordsOnFile: {
		proposal: Date,
		engagementLetter: Date,
		invoice: Date
	},

  reports: {
    specialInspection: {
  		TR1: Date,
  		TR8: Date
  	},
  	initialReportCopies: {
  		TR1: Date,
  		TR8: Date
  	},
    finalReports: {
  		TR1: Date,
  		TR8: Date
  	}
  },

	inspectionInformation: {
    date: Date,
  	inspectorName: String,
    results: String,
    reportFiled: Date,
    signedOffDate: Date
  }
},
{ timestamps: { createAt: 'createdAt', updatedAt: 'updatedAt' }}
);

inspectionSchema.index({ DOB: 'text' });

var Inspection = mongoose.model('Inspection', inspectionSchema);


// API ROUTES
// SEARCH
app.get('/api/inspections/search-by-dob', function(req, res){
  res.json([]);
})

app.get('/api/inspections/search-by-dob/:text', function(req, res){
  var regex = new RegExp(req.params.text, 'g')
  Inspection.find({}, function(err, inspections){
    if (err) throw err;
      res.json(inspections.filter( inspection => {
        return(
          inspection.DOB.search(regex) != -1 ||
          inspection.address.line1.search(regex) != -1 ||
          inspection.address.line2.search(regex) != -1
        )
      }))
  })
})

// CREATE
app.post('/api/inspections/create', function(req, res){

  // console.log(req.body)
  var newInspection = Inspection(req.body.newInspection)

  newInspection.save( function(err, inspection){
    if (err) throw err;
    console.log('created: ', inspection);
    res.json(inspection);
  })

})


// UPDATE
app.post('/api/inspections/edit/:id', function(req, res){
  Inspection.findByIdAndUpdate(req.params.id, {$set: this.body.updateParams }, function(err, inspection){
    console.log(inspection)
  })
})

// SEND HTML DOC
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});





app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
