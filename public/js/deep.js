/**
 * Created by Lynn on 2017/3/18.
 */

$(function () {
    var probeNum=0;

    var deepCharts=echarts.init(document.getElementById('deepChart'));
    // var url='/api/deep';
    var url='/frontend/details/deep';
    var today=new Date();
    var todayStr=today.toString();

    var params={
        probeID:probeNum,
        date:todayStr
    };
    function getData(params) {
        $.get(url,params,function (json) {
            // var jsonParsed=json;
            var jsonStr=json;
            var jsonParsed=eval('('+jsonStr+')');

            deepCharts.setOption({
                series:[{
                    data:jsonParsed.deep
                },{
                    data:jsonParsed.jump
                }]
            })
        })
    }
    getData(params);

    $('#datePicker').datepicker();
    $('.probeID').click(function () {
        $(".probeID").removeClass("chosen");
        $(this).addClass("chosen");
        if($('#probeA').hasClass('chosen')){
            probeNum=0;
        }else{
            probeNum=1;
        }
        params={
            probeID:probeNum,
            date:todayStr
        };
        getData(params);
    });
    $('.searchDate').click(function () {
        // alert($('#datePicker').datepicker('getDate'));
        var dateStr=$('#datePicker').datepicker('getDate').toString();
        params={
            probeID:probeNum,
            date:dateStr
        };
        getData(params);

    });
    var option = {
        title: {
            text: '深访/跳出率'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer:{
                type:'shadow'
            }
        },
        legend: {
            data:['深访率','跳出率']
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
                data: ['一', '二', '三', '四', '五', '六', '七']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'深访率',
                barGap:'1%',
                smooth:'true',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(199, 237, 250,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(199, 237, 250,0.2)'
                        }], false)
                    }
                },
                type:'line',
                data:[ 7,  25,50, 76,  102,130,164],
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
                },
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(200, 53,49, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(200, 53,49, 0.3)'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 10

                    }
                }

            },
            {
                name:'跳出率',
                type:'line',
                smooth:'true',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(216, 244, 247,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(216, 244, 247,1)'
                        }], false)
                    }
                },
                barGap:'1%',
                data:[   125,160,120,100,70 ,48, 18],
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
                },
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(17, 168,171, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(17, 168,171, 0.3)'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.3)',
                        shadowBlur: 10
                    }
                }
            }
        ]
    };

    deepCharts.setOption(option);
    window.addEventListener("resize", function () {

        deepCharts.resize();

    });
})
