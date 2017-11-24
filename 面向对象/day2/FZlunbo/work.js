/**
 * Created by Administrator on 2017/11/23.
 */
$("figcaption").click(function () {
    $("#lightbox").hide();
    $(".lunbo").show();
});
$("#colse>a").click(function () {
    $(".lunbo ").hide();
    $("#lightbox").show();
})
$("#colse").click(function () {
    $(".lunbo ").hide();
    $("#lightbox").show();
})

function fz(x) {
    var img = x;
    var i=0;
    var len = img.length;
    console.log(len)
    var time=setInterval(fun,2000);
    function fun() {
        i++;
        img.eq(i%len).fadeToggle(1000);
        img.eq((i-1)%len).fadeToggle(1000);
    }
    $(".pageLeft").click(function () {
        clearInterval(time);
        i--;
        img.eq(i%len).fadeToggle(1000);
        img.eq((i-1)%len).fadeToggle(1000);
        // setTimeout(function () {
        //     setInterval(fun,2000)
        // },1500);
    })
    $(".pageRight").click(function () {
        clearInterval(time);
        i++;
        img.eq(i%len).fadeToggle(1000);
        img.eq((i-1)%len).fadeToggle(1000);
        // setTimeout(function () {
        //     setInterval(fun,2000)
        // })
    })

}
//点击切换到上一张
$(".pageLeft img").click(function () {

});

//点击切换到下一张
$(".pageRight img").click(function () {

});

// console.log($(".myImg").length)