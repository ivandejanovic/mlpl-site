const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorhandler = require('errorhandler');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);

// all environments
app.set('port', process.env.PORT || 9100);
app.set('views', path.join(__dirname, '/../views/'));
app.set('view engine', 'pug');
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '/../public')));

// development only
if (app.get('env') === 'development') {
  app.use(errorhandler());
  app.locals.pretty = true;
}

routes.setRoutes(app);

server.listen(app.get('port'), () => {
  console.log(`MLPL server listening on port ${app.get('port')} in mode ${app.get('env')}`);
});

module.export = {
  server: app
};
