var mongoose = require('./../index')

var Schema = mongoose.Schema;


// SCHEMA
var inspectionSchema = new Schema({
  DOB: { type: String, required: true },

	address: {
		line1: { type: String, required: true },
		line2: String,
		city: String,
		state: String,
		zip: String,
	},

	clientType: { type: String },

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
    checkinDates: [{
      name: String,
      date: Date
    }],
    date: Date,
  	inspectorName: String,
    results: String,
    reportFiled: Date,
    signedOffDate: Date
  },

  comments: [{
    title: String,
    body: String,
    author: String,
    createdAt: Date
  }]
},
{ timestamps: { createAt: 'createdAt', updatedAt: 'updatedAt' }}
);


// INDEXES
inspectionSchema.index({
    'DOB' : 'text'
  , 'address.line1' : 'text'
  , 'address.line2' : 'text'
});

var Inspection = mongoose.model('Inspection', inspectionSchema);

module.exports = Inspection
