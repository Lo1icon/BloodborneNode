/**
 * Created by Lynn on 2017/3/15.
 */
$(function () {
    var trafficCharts=echarts.init(document.getElementById('trafficChart'));

    var option = {
        title : {
            text: '某年客流量和入店量',
            // subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        grid:{
            top:90
        },
        legend: {
            data:['客流量','入店量','入店率']
        },
        toolbox: {
            show : true,
            top:50,
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
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人数',
            },
            {
                type: 'value',
                name: '入店率',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series : [
            {
                name:'客流量',
                type:'bar',
                barGap:'1%',
                data:[200, 400, 700, 1003, 1205, 1360, 1405, 1602, 1320, 1000, 600, 300],
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
                name:'入店量',
                type:'bar',
                barGap:'1%',
                data:[120, 250, 390, 460, 580, 700, 905, 1102, 980, 880, 460, 120],
                markPoint : {
                    data : [
                        // {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                        // {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            },
            {
                name:'入店率',
                type:'line',
                yAxisIndex: 1,
                data:[60, 62.5, 55.7, 45.8, 48.1, 49.8, 68.8, 74.2, 88, 76.7, 70, 50]
            }
        ]
    };

    trafficCharts.setOption(option);
    window.addEventListener("resize", function () {

        trafficCharts.resize();

    });
})
