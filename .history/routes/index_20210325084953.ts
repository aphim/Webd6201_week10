import express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Express' });
});

/* GET home page - home route. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET about page - about route. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About' });
});

/* GET project page - projects route. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects' });
});

/* GET services page - services route. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services' });
});

/* GET contact page - contact route. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact' });
});

/* GET login page - login route. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login' });
});

module.exports = router;
