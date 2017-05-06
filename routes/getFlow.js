/**
 * Created by Lynn on 2017/3/7.
 */

var express = require('express');
var router = express.Router();

// var data1={
//     time:"2017/03/04 22:22:22",
//     size: 1200,
//     insize: 100,
//     inrate:0.5,
//
// };
// var data2={
//     time:"2017/03/04 22:22:25",
//     size: 1300,
//     insize: 200,
//     inrate:0.3,
//
// };
// var data3={
//     time:"2017/03/04 22:22:28",
//     size: 1400,
//     insize: 110,
//     inrate:0.1,
//
// };
// var data4={
//     time:"2017/03/04 22:22:31",
//     size: 1500,
//     insize: 400,
//     inrate:0.3,
//
// };
// var data5={
//     time:"2017/03/04 22:22:34",
//     size: 1100,
//     insize: 300,
//     inrate:0.2,
//
// };
// var data6={
//     time:"2017/03/04 22:22:37",
//     size: 1100,
//     insize: 500,
//     inrate:0.7,
//
// };
// var data7={
//     time:"2017/03/04 22:22:40",
//     size: 520,
//     insize: 600,
//     inrate:0.6,
//
// };
// var data8={
//     time:"2017/03/04 22:22:43",
//     size: 1400,
//     insize: 700,
//     inrate:0.4,
//
// };
// var data9={
//     time:"2017/03/04 22:22:46",
//     size: 1500,
//     insize: 200,
//     inrate:0.5,
//
// };
// var data10={
//     time:"2017/03/04 22:22:49",
//     size: 1600,
//     insize: 100,
//     inrate:0.1,
//
// };
// var json1=[data1,data2,data3,data4,data5,data6,data7,data8,data9,data10];
// var json2=[data2,data3,data4,data5,data6,data7,data8,data9,data10,data1];
// var json3=[data3,data4,data5,data6,data7,data8,data9,data10,data1,data2];
// var json4=[data4,data5,data6,data7,data8,data9,data10,data1,data2,data3];
// var json5=[data5,data6,data7,data8,data9,data10,data1,data2,data3,data4];
// var json6=[data6,data7,data8,data9,data10,data1,data2,data3,data4,data5];
// var json7=[data7,data8,data9,data10,data1,data2,data3,data4,data5,data6];
// var json8=[data8,data9,data10,data1,data2,data3,data4,data5,data6,data7];
// var json9=[data9,data10,data1,data2,data3,data4,data5,data6,data7,data8];
// var json10=[data10,data1,data2,data3,data4,data5,data6,data7,data8,data9];
// var index=[json1,json2,json3,json4,json5,json6,json7,json8,json9,json10]
// var t=0;

var json =[
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
    // t=t%10;
    res.json(json);
    // t=t+1;
});

module.exports = router;