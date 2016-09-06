var graphql = require ('graphql');
var models = require('./../../db/models')

var TodoType = new graphql.GraphQLObjectType({
  name: 'Inspection',
  fields: function () {
    return {
      _id: {
        type: graphql.GraphQLID
      },
      updatedAt: {
        type: graphql.GraphQLString
      },
      completed: {
        type: graphql.GraphQLBoolean
      }
    }
  }
});

module.exports = TodoType;
