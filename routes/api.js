/**
 * Created by Lynn on 2017/4/14.
 */

var express = require('express');
var router = express.Router();

// 驻店时长返回格式
var json1={
    f1:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f2:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f3:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f4:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f5:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
};
var json2={
    f1:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f2:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f3:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f4:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 2802, 241, 214, 190, 170,150, 132, 101, 84, 50, 23],
    f5:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
};

//来访周期
var json3={
    period:[4,7,11,15,25, 36,22, 32, 24,42,120]
};

//客流数据格式
var json5={
    d1:[{
        data: [500, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 0, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],
    d2:[{
        data: [5, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 0, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],
    d3:[{
        data: [5, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 0, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],
    d4:[{
        data: [5, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 0, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],
    d5:[{
        data: [5, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 0, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],
    d6:[{
        data: [5, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 0, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],
    d7:[{
        data: [5, 6, 0, 28,5, 6, 0, 28, 8, 24, 11, 16, 14, 0, 31, 0, 2, 0, 4, 0, 3, 2, 6, 6]
    }, {
        data: [0, 2, 12, 2,0, 2, 12, 2, 12, 0, 12, 10, 2, 3, 0, 2, 4, 22, 0, 8, 0, 4, 0, 0]
    },{
        data:[0.60, 0.65, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50,0.60, 0.62, 0.55, 0.45, 0.48, 0.49, 0.68, 0.74, 0.88, 0.76, 0.70, 0.50]
    }],

};

var json4={
    period:[4,7,11,15,25, 336,22, 32, 24,42,120]
};
router.get('/intimeData1',function (req,res,next) {

    res.json(json1);
});
router.get('/intimeData2',function (req,res,next) {

    res.json(json2);
});
router.get('/periodData1',function (req,res,next) {

    res.json(json3);
});
router.get('/periodData2',function (req,res,next) {

    res.json(json4);
});
router.get('/trafficData',function (req,res,next) {

    res.json(json5);
});
module.exports = router;