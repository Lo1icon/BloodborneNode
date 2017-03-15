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
        legend: {
            data:['客流量','入店量']
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
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'客流量',
                type:'bar',
                data:[200.0, 400.9, 700.0, 1003.2, 1205.6, 1360.7, 1405.6, 1602.2, 1320.6, 1000.0, 600.4, 300.3],
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
                data:[120.6, 150.9, 390.0, 460.4, 580.7, 700.7, 905.6, 1102.2, 980.7, 880.8, 460.0, 120.3],
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
            }
        ]
    };

    trafficCharts.setOption(option);
    window.addEventListener("resize", function () {

        trafficCharts.resize();

    });
})
