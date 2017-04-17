/**
 * Created by Lynn on 2017/3/16.
 */

$(function () {
    var periodCharts=echarts.init(document.getElementById('periodChart'));

    var url1='/api/periodData1';
    var url2='/api/periodData2';

    $('#datePicker').datepicker();

    $('#submitDate').click(function () {
        // alert($('#datePicker').datepicker('getDate'));
        var dateStr=$('#datePicker').datepicker('getDate').toString();
        $.get(url2,dateStr,function (json) {
            var jsonParsed=json;
            // jsonParsed=eval('('+json+')');

            periodCharts.setOption({
                series:[{
                    data:jsonParsed.period
                }]
            })
        })
    });

    var option = {
        title : {
            text: '来访周期',
        },
        tooltip : {
            trigger: 'axis'
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
                data:[ 4,7,11,15,25, 36,22, 32, 24,42,120],
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
            }
        ]
    };

    periodCharts.setOption(option);
    window.addEventListener("resize", function () {

        periodCharts.resize();

    });
    var today=new Date();
    var todayStr=today.toString();
    $.get(url1,todayStr,function (json) {
        periodCharts.setOption({
            series:[{
                data:json.period
            }]
        });
    })
})