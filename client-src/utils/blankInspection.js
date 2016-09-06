function blankInspection(id="1"){
  return {
    "_id": id,
    "createdAt": null,
    "updatedAt": null,
    "DOB": "9786487988",
    "address": {
      "line1": '769 e. 227 St.',
      "line2": 'apt. 4',
      "city": 'Bronx',
      "state": "NY",
      "zip": '10466'
    },
    "clientType": "IN-HOUSE",
    "recordsOnFile": {
      "proposal": null,
      "engagementLetter": null,
      "invoice": null
    },
    "reports": {
      "specialInspection": {
        "TR1": null, "TR8": null
      },
      "initialReportCopies": {
        "TR1": null, "TR8": null
      },
      "finalReports": {
        "TR1": null, "TR8": null
      }
    },
    "inspectionInformation": {
      "progressCheckinDates": [],
      "date": null,
      "inspector": null,
      "results": false,
      "reportFiled": null,
      "signedOffDate": null
    },
    "comments": []
  }
}

export default blankInspection
