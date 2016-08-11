var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));
app.use('/public', express.static('public'));



// DATABASE
var mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds153845.mlab.com:53845/inspectionlog');


var Schema = mongoose.Schema;
var inspectionSchema = new Schema({
	address: {
		line1: String,
		line2: String,
		city: String,
		state: String,
		zip: String,
	},
	clientStatus: String,
	recordsOnFile: {
		proposal: Boolean,
		engagementLetter: Boolean,
		invoice: Boolean
	},
	dobAppNum: String,
	specialInspectionType: {
		tr1: Boolean,
		tr8: Boolean
	},
	copiesOfInitialReports: {
		tr1: Boolean,
		tr8: Boolean
	},
	dateOfInspection: Date,
	inspectorName: String,
	typeOfInspection: {
		progress: [Date],
		final: Date
	},
	itemInspected: [String],
	inspectionReportOnFile: Boolean,
	inspectionResultsPass: Boolean,
	copiesOfFinalReports: {
		tr1: Boolean,
		tr8: Boolean
	},
	jobSignOffDate: Date,
	comments: [String]
});


var Inspection = mongoose.model('Inspection', inspectionSchema);


// ROUTES

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
