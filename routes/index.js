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

var json1={
    f1:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f2:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f3:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f4:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 1900, 170,150, 132, 101, 84, 50, 23],
    f5:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
}
router.get('/api/intimeData',function (req,res,next) {

    res.json(json1);
});
module.exports = router;
