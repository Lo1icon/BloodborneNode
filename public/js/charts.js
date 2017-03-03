/**
 * Created by Lynn on 2017/3/3.
 */
$(function () {
    var keliucharts=echarts.init(document.getElementById('traffic'));
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

    var option1={
        title:{
            text:'客流量'
        },
        tooltip:{
            trigger:'axis',
            formatter:function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer:{
                animation:false
            }
        },
        xAxis:{
            type:'time',
            splitLine:{
                show:false
            }
        },
        yAxis:{
            type:'value',
            boundaryGap:[0,'100%'],
            splitLine:{
                show:false
            }
        },
        series:[{
            name:'客流量模拟数据',
            type:'line',
            showSymbol:false,
            hoverAnimation:false,
            data:keliudata
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
    var visitorcharts=echarts.init(document.getElementById('visitor'));
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

    var option2={
        title:{
            text:'入店量'
        },
        tooltip:{
            trigger:'axis',
            formatter:function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer:{
                animation:false
            }
        },
        xAxis:{
            type:'time',
            splitLine:{
                show:false
            }
        },
        yAxis:{
            type:'value',
            boundaryGap:[0,'100%'],
            splitLine:{
                show:false
            }
        },
        series:[{
            name:'入店量模拟数据',
            type:'line',
            showSymbol:false,
            hoverAnimation:false,
            data:visitordata
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
    var vispercharts=echarts.init(document.getElementById('visPer'));
    var visperdata = [0.01,0.02];
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



    var option3={
        title:{
            text:'入店率'
        },
        tooltip:{
            trigger:'axis',
            formatter:function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer:{
                animation:false
            }
        },
        xAxis:{
            type:'time',
            splitLine:{
                show:false
            }
        },
        yAxis:{
            type:'value',
            boundaryGap:[0,'100%'],
            splitLine:{
                show:false
            }
        },
        series:[{
            name:'入店率模拟数据',
            type:'line',
            showSymbol:false,
            hoverAnimation:false,
            data:visperdata
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

