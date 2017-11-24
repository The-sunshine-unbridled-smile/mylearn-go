/**
 * Created by Administrator on 2017/11/23 0023.
 */
// var index = 0;
// var srcArray = [];
// var imgArray = $("#lightBox figure img");
// var str = "";
// // var content;
// for(var i = 0 ; i < imgArray.length ; i++){
//     srcArray[i] = imgArray[i].attributes.src.value;
//     str +='<img src="'+srcArray[i]+'" alt="" class="bannerImg">';
// }
//
// var node = '<div id="mask"> ' +
//     '<div class="banner"> ' + str +
//     '<span class="close"><img src="img/close.png" alt=""></span> ' +
//     '<div class="controlBlock"> ' +
//     '<span class="toPre"><img src="img/toPre.png" alt=""></span> ' +
//     '<span class="toNext"><img src="img/toNext.png" alt=""></span> ' +
//     '</div> ' +
//     '</div> ' +
//     '</div>';
//
// $(node).insertAfter("#lightBox");
// $(".bannerImg").hide();
// $(".bannerImg:first-child").show();
// $("#mask").css("height",$(window).height()+"px");
//
// $("#lightBox figure").click(function(){
//     $("#lightBox").fadeOut();
//     $("#mask").fadeIn();
//     index = $(this).index("figure");
//     $($(".bannerImg")[index]).fadeIn()
//         .siblings(".bannerImg").fadeOut();
// });
//
// $(".toPre").click(function(){
//     index === 0 ? index = imgArray.length-1:index--;
//     $($(".bannerImg")[index]).fadeIn()
//         .siblings(".bannerImg").fadeOut();
// });
//
//
// $(".toNext").click(function(){
//     index === imgArray.length-1 ? index = 0 : index++;
//     $($(".bannerImg")[index]).fadeIn()
//         .siblings(".bannerImg").fadeOut();
// });
//
// $(".close").click(function(){
//     $("#mask").fadeOut();
//     $("#lightBox").fadeIn();
// });

(function () {
    var lightBoxObj = {
        init:function(){
            var index = 0;
            var str = "";
            var srcArray = [];
            var imgArray = $("#lightBox figure img");
            for(var i = 0 ; i < imgArray.length ; i++){
                srcArray[i] = imgArray[i].attributes.src.value;
                str +='<img src="'+srcArray[i]+'" alt="" class="bannerImg">';
            }

            var node = '<div id="mask"> ' +
                '<div class="banner"> ' + str +
                '<span class="close"><img src="img/close.png" alt=""></span> ' +
                '<div class="controlBlock"> ' +
                '<span class="toPre"><img src="img/toPre.png" alt=""></span> ' +
                '<span class="toNext"><img src="img/toNext.png" alt=""></span> ' +
                '</div> ' +
                '</div> ' +
                '</div>';

            $(node).insertAfter("#lightBox");
            $("#lightBox .bannerImg").hide();
            $("#mask").css("height",$(window).height()+"px");


            $("#lightBox figure").click(function(){
                $("#lightBox").fadeOut();
                $("#mask").fadeIn();
                index = $(this).index("figure");
                $($("#lightBoxContainer .bannerImg")[index]).fadeIn()
                    .siblings(".bannerImg").fadeOut();
            });

            $("#lightBoxContainer .toPre").click(function(){
                index === 0 ? index = imgArray.length-1:index--;
                $($("#lightBoxContainer .bannerImg")[index]).fadeIn()
                    .siblings(".bannerImg").fadeOut();
            });


            $("#lightBoxContainer .toNext").click(function(){
                index === imgArray.length-1 ? index = 0 : index++;
                $($("#lightBoxContainer .bannerImg")[index]).fadeIn()
                    .siblings("#lightBoxContainer .bannerImg").fadeOut();
            });

            $("#lightBoxContainer .close").click(function(){
                $("#mask").fadeOut();
                $("#lightBox").fadeIn();
            });
        }
    };
    window.lightBox = {init:lightBoxObj.init}
})();

window.onload = lightBox.init();