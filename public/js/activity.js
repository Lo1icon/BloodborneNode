/**
 * Created by Lynn on 2017/3/16.
 */
$(function () {
    var activityCharts=echarts.init(document.getElementById('activityChart'));
    $('#datePicker').datepicker();
    $('.probeID').click(function () {
        $(".probeID").removeClass("chosen");
        $(this).addClass("chosen");
    });
    var option = {
        title: {
            text: '顾客活跃度'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['沉睡客户','低活跃度','中活跃度','高活跃度']
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'沉睡客户',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'低活跃度',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'中活跃度',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},

                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'高活跃度',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };

    activityCharts.setOption(option);
    window.addEventListener("resize", function () {

        activityCharts.resize();

    });
})

