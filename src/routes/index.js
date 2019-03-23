const errors = require('./errors');
const locales = require('./../locales');

function index(req, res, locale) {
  res.render('index', locale);
}

function docs(req, res, locale) {
  res.render('docs', locale);
}

function playground(req, res, locale) {
  res.render('playground', locale);
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

function playgroundEn(req, res) {
  playground(req, res, locales.en);
}

function playgroundRs(req, res) {
  playground(req, res, locales.rs);
}

function playgroundEs(req, res) {
  playground(req, res, locales.es);
}

function setRoutes(app) {
  app.get('/', indexEn);
  app.get('/index', indexEn);
  app.get('/index_rs', indexRs);
  app.get('/index_es', indexEs);
  app.get('/docs', docsEn);
  app.get('/docs_rs', docsRs);
  app.get('/docs_es', docsEs);
  app.get('/playground', playgroundEn);
  app.get('/playground_rs', playgroundRs);
  app.get('/playground_es', playgroundEs);

  errors.setErrors(app);
}

module.exports = {
  setRoutes
};
