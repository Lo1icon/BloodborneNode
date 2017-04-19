/**
 * Created by Lynn on 2017/3/7.
 */

var express = require('express');
var router = express.Router();


var json1 =[
    {
        time:"2017/03/04 22:22:22",
        size: 1200,
        insize: 100,
        inrate:0.5,

    },{
        time:"2017/03/04 22:22:25",
        size: 1300,
        insize: 200,
        inrate:0.3,

    },{
        time:"2017/03/04 22:22:28",
        size: 1400,
        insize: 110,
        inrate:0.1,

    },{
        time:"2017/03/04 22:22:31",
        size: 1500,
        insize: 400,
        inrate:0.3,

    },{
        time:"2017/03/04 22:22:34",
        size: 1100,
        insize: 300,
        inrate:0.2,

    },{
        time:"2017/03/04 22:22:37",
        size: 1100,
        insize: 500,
        inrate:0.7,

    },{
        time:"2017/03/04 22:22:40",
        size: 520,
        insize: 600,
        inrate:0.6,

    },{
        time:"2017/03/04 22:22:43",
        size: 1400,
        insize: 700,
        inrate:0.4,

    },{
        time:"2017/03/04 22:22:46",
        size: 1500,
        insize: 200,
        inrate:0.5,

    },
    {
        time:"2017/03/04 22:22:49",
        size: 1600,
        insize: 100,
        inrate:0.1,

    }];
// var json0=[];
// for(var i=0;i<10;i++){
//     json0.push(json1);
// }

router.get('/', function (req, res,next) {

    res.json(json1);
});

module.exports = router;