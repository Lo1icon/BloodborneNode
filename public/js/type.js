/**
 * Created by Lynn on 2017/3/18.
 */
/**
 * Created by Lynn on 2017/3/16.
 */
$(function () {
    var probeNum=0;

    var typeCharts=echarts.init(document.getElementById('typeChart'));
    // var url = '/api/newOld';
    var url='/frontend/details/newOld'

    var today=new Date();
    var todayStr=today.toString();
    var params={
        probeID:probeNum,
        date:todayStr
    };
    function getData(params) {
        $.get(url,params,function (json) {
            // var jsonParsed = json;
            var jsonStr=json;
            var jsonParsed=eval('('+jsonStr+')');

            typeCharts.setOption({
                series:[{
                    data:jsonParsed.newVisitor
                },{
                    data:jsonParsed.oldVisitor
                }]
            });
        });
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
            text: '新/老顾客'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer:{
                type:'shadow'
            }
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
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
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
                smooth:'true',

                type:'bar',
                data:[ 7,  25,50, 76,  102,130,164,180,140,112,72, 32],
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
                name:'老顾客',
                type:'bar',
                smooth:'true',

                barGap:'1%',
                data:[   125,160,120,100,70 ,48, 18,7,26,46,69,109],
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

    typeCharts.setOption(option);
    window.addEventListener("resize", function () {

        typeCharts.resize();

    });
});

