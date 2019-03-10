const errors = require('./errors');
const locales = require('./../locales');

function index(req, res, locale) {
  res.render('index', locale);
}

function docs(req, res, locale) {
  res.render('docs', locale);
}

function tryMlpl(req, res, locale) {
  res.render('try', locale);
}

function indexEn(req, res) {
  index(req, res, locales.en);
}

function indexRs(req, res) {
  index(req, res, locales.rs);
}

function indexEs(req, res) {
  index(req, res, locales.es);
}

function docsEn(req, res) {
  docs(req, res, locales.en);
}

function docsRs(req, res) {
  docs(req, res, locales.rs);
}

function docsEs(req, res) {
  docs(req, res, locales.es);
}

function tryEn(req, res) {
  tryMlpl(req, res, locales.en);
}

function tryRs(req, res) {
  tryMlpl(req, res, locales.rs);
}

function tryEs(req, res) {
  tryMlpl(req, res, locales.es);
}

function setRoutes(app) {
  app.get('/', indexEn);
  app.get('/index', indexEn);
  app.get('/index_rs', indexRs);
  app.get('/index_es', indexEs);
  app.get('/docs', docsEn);
  app.get('/docs_rs', docsRs);
  app.get('/docs_es', docsEs);
  app.get('/try', tryEn);
  app.get('/try_rs', tryRs);
  app.get('/try_es', tryEs);

  errors.setErrors(app);
}

module.exports = {
  setRoutes
};
