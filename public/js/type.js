/**
 * Created by Lynn on 2017/3/18.
 */
/**
 * Created by Lynn on 2017/3/16.
 */
$(function () {
    var typeCharts=echarts.init(document.getElementById('typeChart'));

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
})

