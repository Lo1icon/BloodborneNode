var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/index', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/activity', function (req, res, next) {
    res.render('activity', {title: 'Express'});
});
router.get('/intime', function (req, res, next) {
    res.render('intime', {title: 'Express'});
});
router.get('/period', function (req, res, next) {
    res.render('period', {title: 'Express'});
});
router.get('/traffic', function (req, res, next) {
    res.render('traffic', {title: 'Express'});
});
router.get('/type', function (req, res, next) {
    res.render('type', {title: 'Express'});
});
router.get('/deep', function (req, res, next) {
    res.render('deep', {title: 'Express'});
});
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
module.exports = router;
