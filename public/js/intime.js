/**
 * Created by Lynn on 2017/3/18.
 */

$(function () {
    var intimeCharts=echarts.init(document.getElementById('intimeChart'));

    var url='/api/intimeData';


    var option = {
        title: {
            text: '驻店时长'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['<1min','1~3min','3~5min','5~10min','>10min']
        },
        toolbox: {
            show : true,
            top:100,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        grid: {
            top:100,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'<1min',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
            },
            {
                name:'1~3min',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
            },
            {
                name:'3~5min',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},

                data:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
            },
            {
                name:'5~10min',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},

                data:[10, 22, 41, 64, 90, 110,120, 132, 151, 204, 250, 310,320, 282, 241, 214, 190, 170,150, 132, 101, 84, 50, 23]
            },
            {
                name:'>10min',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[10, 22, 41, 64, 90, 110,120, 132, 191, 204, 250, 310,315, 282, 241, 214, 190, 170,150, 132, 101, 64, 50, 23]
            }
        ]
    };

    intimeCharts.setOption(option);
    window.addEventListener("resize", function () {

        intimeCharts.resize();

    });
    $.get(url,function (json) {
        intimeCharts.setOption({
            series:[{
                data:json.f1
            },{
                data:json.f2
            },{
                data:json.f3
            },{
                data:json.f4
            },{
                data:json.f5
            }]
        });
    })
})

// var option = {
//     title : {
//         text: '驻店时长环比',
//     },
//     tooltip : {
//         trigger: 'axis'
//     },
//     legend: {
//         data:['昨天','今天']
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             dataView : {show: true, readOnly: false},
//             magicType : {show: true, type: ['line', 'bar']},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     calculable : true,
//     xAxis : [
//         {
//             type : 'category',
//             data: ['≤1min', '1~3min', '3~5min', '5~10min', '>10min'],
//         }
//     ],
//     yAxis : [
//         {
//             type : 'value'
//         }
//     ],
//     series : [
//         {
//             name:'昨天',
//             barGap:'1%',
//             type:'bar',
//             data:[7.0,  25.6, 76.7,  102.2, 32.6],
//             markPoint : {
//                 data : [
//                     {type : 'max', name: '最大值'},
//                     {type : 'min', name: '最小值'}
//                 ]
//             },
//             markLine : {
//                 data : [
//                     {type : 'average', name: '平均值'}
//                 ]
//             }
//         },
//         {
//             name:'今天',
//             type:'bar',
//             barGap:'1%',
//             data:[26.4,  70.7, 105.6, 48.7, 18.8],
//             markPoint : {
//                 data : [
//                     {type : 'max', name: '最大值'},
//                     {type : 'min', name: '最小值'}
//                 ]
//             },
//             markLine : {
//                 data : [
//                     {type : 'average', name : '平均值'}
//                 ]
//             }
//         }
//     ]
// };