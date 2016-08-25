var graphql = require ('graphql');
var example = require('./../queries')

module.exports = new graphql.GraphQLSchema({
  query: example
});
