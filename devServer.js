var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var logger = require('morgan');
var app = require('./app');
var models = require('./models');

// logging
app.use(logger('dev'));


// webpack configuration
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


// serve index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// listen on selected port
models.sequelize.sync().then(function () {
  app.listen(3000, function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3000');
  });
})
