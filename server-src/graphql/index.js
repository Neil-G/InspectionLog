var graphql = require ('graphql');
var exampleQuery = require('./queries').example;
var MutationType = require('./mutations');

module.exports = new graphql.GraphQLSchema({
  query: exampleQuery,
  mutation: MutationType
});
