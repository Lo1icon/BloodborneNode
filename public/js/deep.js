/**
 * Created by Lynn on 2017/3/18.
 */

$(function () {
    var deepCharts=echarts.init(document.getElementById('deepChart'));
    var option = {
        title: {
            text: '深访分析',
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            data: ['客流','入店','深访','购买']
        },
        series: [
            {
                name: '预期',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    normal: {
                        formatter: '{b}预期'
                    },
                    emphasis: {
                        formatter: '{b}预期: {c}%'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.7
                    }
                },
                data: [
                    {value: 25, name: '购买'},
                    {value: 50, name: '深访'},
                    {value: 75, name: '入店'},
                    {value: 100, name: '客流'}
                ]
            },
            {
                name: '实际',
                type: 'funnel',
                left: '10%',
                width: '80%',
                maxSize: '80%',
                label: {
                    normal: {
                        position: 'inside',
                        formatter: '{c}%',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    emphasis: {
                        position:'inside',
                        formatter: '{b}实际: {c}%',
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                },
                data: [
                    {value: 10, name: '购买'},
                    {value: 25, name: '深访'},
                    {value: 50, name: '入店'},
                    {value: 80, name: '客流'}
                ]
            }
        ]
    };
    deepCharts.setOption(option);
    window.addEventListener("resize", function () {

        deepCharts.resize();

    });
})