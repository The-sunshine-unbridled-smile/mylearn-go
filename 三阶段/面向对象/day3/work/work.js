/**
 * Created by uid on 2017/11/24.
 */


var Play
var figure = $("figure");  //获取所有的轮播大图
var len = figure.length;
var dot = $(".one");  //轮播的小圆点
var i = 0;
//选择小圆点所在的位置
$(function () {
    $("select").change(function () {
        var select = $("select").val();
        if (select == "top") {
            $("#dot").attr("class", "dot-top")
        } else if (select == "bottom") {
            $("#dot").attr("class", "dot-bottom")
        } else if (select == "right") {
            $("#dot").attr("class", "dot-right")
        } else {
            $("#dot").attr("class", "dot-left")
        }
    });
});
//淡入淡出效果
function myFade(x) {
    var img = x;
    var len = img.length;
    Play = setInterval(autoPlay, 2000);  //调用自动轮播
    //自动轮播
    function autoPlay() {
        i++;
        figure.eq(i % len).fadeToggle(1000);   //大图的切换
        figure.eq((i - 1) % len).fadeToggle(1000);
        dot.eq(i % len).css("background-color", "#ff5056").siblings().css("background-color", "transparent");  //小圆点的切换
    }
}
//移入小圆点跳转到对应的大图
$.each($(".one"), function (e) {
    $(this).mouseover(function () {
        Play = clearInterval(Play);   //移入小圆点，清除定时器暂停轮播
        figure.eq(e).fadeIn().siblings().fadeOut();
        $(this).css("background-color", "#ff5056").siblings().css("background-color", "transparent")
    })
});


function upDown() {
    /*    //上下切换轮播，自动轮播
     $.each(figure, function (a) {
     console.log(a)
     Play = setTimeout(function () {
     $(this).animate({top: -a * 630})
     },2000)
     });*/
//上下切换轮播，移入小圆点
    $(".one").on("mouseover", function () {
        clearTimeout(Play);
        $(this).css("background-color", "#ff5056").siblings().css("background-color", "transparent");
        var coordinate = $(this).index();
        Play = setTimeout(function () {
            $("figure").animate({top: -coordinate * 630})
        }, 300)
    });
}

//翻书效果
function openBook(x) {
    var img = x;
    var sildWidth = $("#slider").width();
    var len = img.length;
    Play = setInterval(fun, 3000);
    function fun() {
        var last = img.last(); //   最后一个
        var first = img.first(); // 第一个
        var figure1 = img.eq(1);
        var lastClone = last.clone();
        last.find("img").andSelf().animate({width: "0px"}, function () {
            last.remove();
            first.before(lastClone);
            img = $(img.selector);
        });
    }
}


