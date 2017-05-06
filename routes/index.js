var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/index', function (req, res, next) {
    res.render('index');
});
router.get('/activity', function (req, res, next) {
    res.render('activity');
});
router.get('/intime', function (req, res, next) {
    res.render('intime');
});
router.get('/period', function (req, res, next) {
    res.render('period');
});
router.get('/traffic', function (req, res, next) {
    res.render('traffic');
});
router.get('/type', function (req, res, next) {
    res.render('type');
});
router.get('/deep', function (req, res, next) {
    res.render('deep');
});
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
