/**
 * Created by uid on 2017/11/24.
 */
var Play=setInterval(autoPlay,2000)
var figure=$("figure");
var dot=$(".one");
var i=0;
function autoPlay() {
    i++;
    figure[i % 4].fadeToggle(1000);
    figure[(i - 1) % 4].fadeToggle(1000);
    dot[i % 4].css("background-color", "#ff5056");
    dot[(i - 1) % 4].css("background-color", "none");
}


