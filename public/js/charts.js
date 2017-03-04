/**
 * Created by Lynn on 2017/3/3.
 */
$(function () {
    var keliucharts = echarts.init(document.getElementById('traffic'));

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }

    var keliudata = [];
    var now = +new Date(2017, 3, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        keliudata.push(randomData());
    }

    var option1 = {
        title: {
            text: '客流量'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '客流量模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: keliudata
        }]

    };
    keliucharts.setOption(option1);

    setInterval(function () {

        for (var i = 0; i < 5; i++) {
            keliudata.shift();
            keliudata.push(randomData());
        }

        keliucharts.setOption({
            series: [{
                data: keliudata
            }]
        });
    }, 1000);
    // window.onresize=keliucharts.resize;
    window.addEventListener("resize", function () {

        keliucharts.resize();

    });
})

$(function () {
    var visitorcharts = echarts.init(document.getElementById('visitor'));

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }

    var visitordata = [];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;
    for (var i = 0; i < 1000; i++) {
        visitordata.push(randomData());
    }

    var option2 = {
        title: {
            text: '入店量'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '入店量模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: visitordata
        }]

    };
    visitorcharts.setOption(option2);

    setInterval(function () {

        for (var i = 0; i < 5; i++) {
            visitordata.shift();
            visitordata.push(randomData());
        }

        visitorcharts.setOption({
            series: [{
                data: visitordata
            }]
        });
    }, 1000);
    // window.onresize=visitorcharts.resize;
    window.addEventListener("resize", function () {

        visitorcharts.resize();

    });
})

$(function () {
    var vispercharts = echarts.init(document.getElementById('visPer'));
    var visperdata = [0.01, 0.02];
    var now = +new Date(1997, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random();
    for (var i = 0; i < 50; i++) {
        visperdata.push(randomData());
    }
    function randomData() {
        now = new Date(+now + oneDay);
        value = Math.random().toFixed(2);
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                value
            ]
        }
    }


    var option3 = {
        title: {
            text: '入店率'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '入店率模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: visperdata
        }]

    };
    vispercharts.setOption(option3);

    setInterval(function () {

        for (var i = 0; i < 1; i++) {
            visperdata.shift();
            visperdata.push(randomData());
        }

        vispercharts.setOption({
            series: [{
                data: visperdata
            }]
        });
    }, 3000);
    // window.onresize=vispercharts.resize;
    window.addEventListener("resize", function () {

        vispercharts.resize();

    });
})

$(function () {
    var vlvcharts = echarts.init(document.getElementById('visLastVis'));

    var option4 = {
        color: ['#c23531'],
        //#3398DB
        title:{
            text:'来访周期分布'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['≤1 day', '≤1 week', '≤1 month', '≤1 season', '≤1/2 year', '≤1 year', 'never'],
                axisTick: {
                    alignWithLabel: true
                },
                // x轴需要全部显示时添加
                axisLabel:{
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '顾客人数',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };

    vlvcharts.setOption(option4);
    window.addEventListener("resize", function () {

        vlvcharts.resize();

    });

})
$(function () {
    var tscharts=echarts.init(document.getElementById('timeStay'));
    var option5 = {
        color: ['#c23531'],
        //#3398DB
        title:{
            text:'驻店时长分布'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['≤1min', '1~3min', '3~5min', '5~10min', '>10min'],
                axisTick: {
                    alignWithLabel: true
                },
                // x轴需要全部显示时添加
                axisLabel:{
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '人数',
                type: 'bar',
                barWidth: '60%',
                data: [10, 100, 200, 400,334]
            }
        ]
    };

    tscharts.setOption(option5);
    window.addEventListener("resize", function () {

        tscharts.resize();

    });

})

$(function () {
    var vacharts=echarts.init(document.getElementById('visActivity'));
    var option6={
        title: {
            text: '顾客活跃度',
            // left: 'center',
            // top: 20,
            // textStyle: {
            //     color: '#ccc'
            // }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'gray'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'gray'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        // shadowBlur: 200,
                        // shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    }
    vacharts.setOption(option6);
    window.addEventListener("resize", function () {

        vacharts.resize();

    });
})
