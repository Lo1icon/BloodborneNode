/**
 * Created by Lynn on 2017/3/18.
 */
/**
 * Created by Lynn on 2017/3/16.
 */
$(function () {
    var typeCharts=echarts.init(document.getElementById('typeChart'));

    var option = {
        title: {
            text: '新/老顾客'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['新顾客','老顾客']
        },
        toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data: ['≤1min', '1~3min', '3~5min', '5~10min', '>10min'],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'新顾客',
                barGap:'1%',
                type:'bar',
                data:[ 7.0,  25.6, 76.7,  102.2, 32.6],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'老顾客',
                type:'bar',
                barGap:'1%',
                data:[  26.4,  70.7, 105.6, 48.7, 18.8],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };

    typeCharts.setOption(option);
    window.addEventListener("resize", function () {

        typeCharts.resize();

    });
})

