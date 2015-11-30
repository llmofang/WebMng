/**
 * Created by westilian on 1/19/14.
 */

(function(){
    var t;
    function size(animate){
        if (animate == undefined){
            animate = false;
        }
        clearTimeout(t);
        t = setTimeout(function(){
            $("canvas").each(function(i,el){
                $(el).attr({
                    "width":$(el).parent().width(),
                    "height":$(el).parent().outerHeight()
                });
            });
            redraw(animate);
            var m = 0;
            $(".chartJS").height("");
            $(".chartJS").each(function(i,el){ m = Math.max(m,$(el).height()); });
            $(".chartJS").height(m);
        }, 30);
    }
    $(window).on('resize', function(){ size(false); });


    function redraw(animation){
        var options = {};
        if (!animation){
            options.animation = false;
        } else {
            options.animation = true;
        }


        var Linedata = {
            labels : ["10-14", "10-15", "10-16", "10-17", "10-18", "10-19", "10-20", "10-21", "10-22", "10-23", "10-24", "10-25", "10-26", "10-27", "10-28"],
            datasets : [
                {
                    fillColor : "#79D1CF",
                    strokeColor : "#79D1CF",
                    pointColor : "#79D1CF",
                    pointStrokeColor : "#fff",
                    data : [12504.76,5241.56,26069.76,26069.76,26069.76,47245.99,63865.60,119345.33,177125.60,227188.63,227188.63,227188.63,295470.34,347410.59,425573.62]
                }
            ]
        }
        var myLineChart = new Chart(document.getElementById("line-chart-js").getContext("2d")).Line(Linedata);
    }

    size(true);

}());
