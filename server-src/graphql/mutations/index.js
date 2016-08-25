var graphql = require('graphql');
var MutationAdd = require('./example');

var MutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: MutationAdd
  }
});

module.exports = MutationType;
