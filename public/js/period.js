/**
 * Created by Lynn on 2017/3/16.
 */

$(function () {
    var probeNum=0;
    var periodCharts=echarts.init(document.getElementById('periodChart'));

    // var url='/api/periodData1';
    var url='/frontend/details/period';
    function getData(params) {
        $.get(url,params,function (json) {
            // var jsonParsed=json;
            var jsonStr=json;
            var jsonParsed=eval('('+jsonStr+')');

            periodCharts.setOption({
                series:[{
                    data:jsonParsed.period
                },{
                    data: [
                        {
                            name:'高活跃度',
                            value:jsonParsed.high
                        },
                        {
                            name:'中活跃度',
                            value:jsonParsed.medium
                        },
                        {
                            name:'低活跃度',
                            value:jsonParsed.low
                        }
                    ]
                }]
            })
        })
    }

    var today=new Date();
    var todayStr=today.toString();
    var params={
        probeID:probeNum,
        date:todayStr
    };
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
    })
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
        title : {
            text: '来访周期和活跃度分布',
        },
        tooltip : {
            trigger: 'item',
            axisPointer:{
                type:'shadow'
            }
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
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','10+'],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'人数',
                barGap:'1%',
                type:'bar',
                color:['#dd5965'],
                smooth:'true',
                data:[ 4,7,11,15,25, 36,22, 32, 24,42,120],
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(17, 168,171, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(17, 168,171, 0.1)'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                }
                // markPoint : {
                //     data : [
                //         {type : 'max', name: '最大值'},
                //         {type : 'min', name: '最小值'}
                //     ]
                // },
                // markLine : {
                //     data : [
                //         {type : 'average', name: '平均值'}
                //     ]
                // }
            },
            {
                name:'顾客活跃度',
                type:'pie',
                center: ['25%', '35%'],
                radius: '28%',
                data: [
                    {
                        name:'高活跃度',
                        value:200
                    },
                    {
                        name:'中活跃度',
                        value:300
                    },
                    {
                        name:'低活跃度',
                        value:150
                    }
                ]
            }
        ]
    };

    periodCharts.setOption(option);
    window.addEventListener("resize", function () {

        periodCharts.resize();

    });

})