const bodyParser = required('body-parser');
const morgan = required('morgan');
const passport = require('passport');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');

const { logs } = require('./vars');
const strategies = require('./passport');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan(logs));
  app.use(compress());  // Send all responses as gzip
  app.use(methodOverride());
  app.use(helmet());
  app.use(cors());
  app.use(passport.initialize());
  passport.use('jwt', strategies.jwt);
  passport.use('facebook', strategies.facebook);
  passport.use('google', strategies.google);
};

