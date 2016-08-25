var graphql = require('graphql');
var TodoType = require('./../schemas').example


var TODOs = [
  {
    "id": 1446412739542,
    "title": "Read emails",
    "completed": false
  },
  {
    "id": 1446412740883,
    "title": "Buy orange",
    "completed": true
  }
];


var MutationAdd = {
  type: new graphql.GraphQLList(TodoType),
  description: 'Add a Todo',
  args: {
    title: {
      name: 'Todo title',
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
  resolve: (root, {title}) => {
    TODOs.push({
      id: (new Date()).getTime(),
      title: title,
      completed: false
    });
    return TODOs;
  }
};

module.exports = MutationAdd;
