let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./../app');

var server = app.listen(3001)

chai.use(chaiHttp)

describe('/graphQL', () => {
  it('should return todo', (done) => {
    chai.request(server)
      .post('/graphQL')
      .set('content-type', 'application/graphql')
      .send('query { todos { id, title, completed } }')
      .end((err, res) => {
        console.log(res.body)
      done();
      })
  })
})
