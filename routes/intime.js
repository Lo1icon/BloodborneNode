/**
 * Created by Lynn on 2017/4/5.
 */

var express = require('express');
var router = express.Router();


var json1 ={
    deep:0.3,
    jump:0.4,
    f1:100,
    f2:200,
    f3:400,
    f4:300,
    f5:100
};
// var json0=[];
// for(var i=0;i<10;i++){
//     json0.push(json1);
// }

router.get('/', function (req, res,next) {

    res.json(json1);
});

module.exports = router;