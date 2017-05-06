/**
 * Created by Lynn on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('home');
});

module.exports = router;
