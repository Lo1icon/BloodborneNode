/**
 * Created by Lynn on 2017/4/7.
 */
var express = require('express');
var router = express.Router();


var json1 ={
    newVisitor:300,
    oldVisitor:150
};
// var json0=[];
// for(var i=0;i<10;i++){
//     json0.push(json1);
// }

router.get('/', function (req, res,next) {

    res.json(json1);
});

module.exports = router;