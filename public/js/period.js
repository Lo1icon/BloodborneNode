/**
 * Created by Lynn on 2017/3/16.
 */

$(function () {
    var periodCharts=echarts.init(document.getElementById('periodChart'));

    var option = {
        title : {
            text: '来访周期环比',
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['昨天','今天']
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
                data: ['≤1 day', '≤1 week', '≤1 month', '≤1 season', '≤1/2 year', '≤1 year', 'never'],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'昨天',
                barGap:'1%',
                type:'bar',
                data:[ 4.9, 7.0,  25.6, 76.7,  102.2, 32.6, 20.0],
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
                name:'今天',
                type:'bar',
                barGap:'1%',
                data:[ 5.9, 26.4,  70.7, 105.6, 48.7, 18.8, 6.0],
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

    periodCharts.setOption(option);
    window.addEventListener("resize", function () {

        periodCharts.resize();

    });
})