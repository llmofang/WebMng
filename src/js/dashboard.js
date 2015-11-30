$(function() {

    var dataPie = [
        { label: "叶-广发",  data: 76},
        { label: "叶-华泰",  data: 24},
    ];
// DONUT
    $.plot($(".sm-pie"), dataPie,
        {
            series: {
                pie: {
                    innerRadius: 0.7,
                    show: true,
                    stroke: {
                        width: 0.1,
                        color: '#ffffff'
                    }
                }

            },

            legend: {
                show: true
            },
            grid: {
                hoverable: true,
                clickable: true
            },

            colors: ["#b2def7", "#efb3e6"]
        });
});










/*Slim Scroll*/
$(function () {
    $('.event-list').slimscroll({
        height: '305px',
        wheelStep: 20
    });
    $('.conversation-list').slimscroll({
        height: '360px',
        wheelStep: 35
    });
    $('.to-do-list').slimscroll({
        height: '300px',
        wheelStep: 35
    });
    



});









/*Knob*/
var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The length of each line
    lineWidth: 0.48, // The line thickness
    pointer: {
        length: 0.6, // The radius of the inner circle
        strokeWidth: 0.03, // The rotation offset
        color: '#464646' // Fill0 color
    },
    limitMax: 'true', // If true, the pointer will not go past the end of the gauge
    colorStart: '#fa8564', // Colors
    colorStop: '#fa8564', // just experiment with them
    strokeColor: '#F1F1F1', // to see which ones work best for you
    generateGradient: true
};
var target = document.getElementById('gauge'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 1578; // set max gauge value
gauge.animationSpeed = 32; // set animation speed (32 is default value)
gauge.set(1475); // set actual value
gauge.setTextField(document.getElementById("gauge-textfield"));

