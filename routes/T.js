/**
 * Created by Lynn on 2017/4/6.
 */

var express = require('express');
var router = express.Router();


var json1 ={
    t1:100,
    t2:200,
    t3:400,
    t4:300,
    t5:100,
    t6:50,
    high:100,
    medium:200,
    low:150,
    sleep:250
};
// var json0=[];
// for(var i=0;i<10;i++){
//     json0.push(json1);
// }

router.get('/', function (req, res,next) {

    res.json(json1);
});

module.exports = router;