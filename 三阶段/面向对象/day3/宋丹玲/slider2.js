/**
 * Created by Administrator on 2017/11/26 0026.
 */
(function(){
    var slider = {
        init:function(obj){
            var point = obj.point && true;
            var arrow = obj.arrow && true;
            var toggle = obj.toggle || "fade";
            var mouseListener = obj.mouseListener && true;
            var pointShape = obj.pointShape || "circle";
            var pointColor = obj.pointColor || "black";
            var pointColorClick = obj.pointColorClick || "lightGray";

            var srcArg;
            var imgArg;
            var figureArg;
            var container;
            var index = 0;
            var pointArg;
            var height;

            baseSetting();
            setHeight();
            window.onresize = setHeight;

            if(point){addPointBlock();}
            if(arrow){addArrowBlock();}
            if(mouseListener){listener();}

            switch (toggle){
                case("horizontal"):horizontalToggle();break;
                case("vertical"):verticalToggle();break;
                case("fade"):fadeToggle();break;
            }

            function baseSetting() {
                srcArg = [];
                imgArg = $("#slider images");
                container = $("#sliderContainer");
                figureArg = $("#slider figure");

                //change z-index
                for(var i =0 ; i < imgArg.length ; i++){
                    $(imgArg[i]).parents("figure").css("z-index",imgArg.length - i);
                    srcArg[i] = imgArg[i].attributes.src.value;
                }

                //add coverBlock
                var coverBlock = '<div class="coverBlock"></div>';
                $("#slider").append(coverBlock);
                $(".coverBlock").css("z-index",imgArg.length+2);
            }
            //controller
            function setHeight(){
                var width = container.width()*0.5;
                container.css("height",width+"px");
                $(".sliderArrow").css({"z-index":imgArg.length+1,"top":parseInt(container.css("margin-top"))+(parseInt(container.height()/2))+"px"});
            }
            function addPointBlock(){
                var pointBlock;
                var pointNode = "";
                pointBlock = '<div class="sliderPoint"></div>';
                container.append(pointBlock);


                for(var i =0 ; i < imgArg.length ; i++){
                    pointNode += '<span></span>';
                }

                $(".sliderPoint").css("z-index",imgArg.length+1).html(pointNode);
                pointArg = $(".sliderPoint span");
                $(pointArg[index]).css("background-color",pointColorClick).siblings("span").css("background-color",pointColor);
                $(".sliderPoint span").addClass(pointShape)


            }
            function addArrowBlock(){
                var arrowBlock = '<div class="sliderArrow"> ' +
                    '<span class="toPre"><images src="images/toPre.png" alt=""></span> ' +
                    '<span class="toNext"><images src="images/toNext.png" alt=""></span> ' +
                    '</div>';
                container.append(arrowBlock);
                console.log(parseInt(container.css("margin-top"))+(parseInt(container.height()/2))+"px")
                $(".sliderArrow").css({"z-index":imgArg.length+1,"top":parseInt(container.css("margin-top"))+(parseInt(container.height()/2))+"px"});
            }
            //toggle
            function horizontalToggle() {
                $(".sliderPoint span").on("click",function(){
                    var preIndex = index;
                    index = $(this).index();
                    $(this).css("background-color","lightGray").siblings("span").css("background-color","black");
                    // $(figureArg[index]).fadeIn().siblings("figure").fadeOut();
                    $(figureArg).hide();
                    $(figureArg[preIndex]).show();
                    $(figureArg[index]).css({"left":"100%","z-index":imgArg.length}).show().animate({"left":"0"},"normal","linear",function(){
                        $(figureArg[preIndex]).css("z-index",imgArg.length-preIndex).hide();
                        $(figureArg[index]).css("z-index",imgArg.length-index);
                    });

                });

                $(".sliderArrow .toPre").on("click",function(){slipProRight()});

                $(".sliderArrow .toNext").on("click",function(){slipNextLeft()});
            }
            function verticalToggle(){
                $(".sliderPoint span").on("click",function(){
                    height = $(".coverBlock").height();
                    var preIndex = index;
                    index = $(this).index();
                    $(this).css("background-color","lightGray").siblings("span").css("background-color","black");
                    $(figureArg).hide();
                    $(figureArg[preIndex]).show();
                    $(figureArg[index]).css({"top":-height+"px","z-index":imgArg.length}).show().animate({"top":"0"},"normal","linear",function(){
                        $(figureArg[preIndex]).css("z-index",imgArg.length-preIndex).hide();
                        $(figureArg[index]).css("z-index",imgArg.length-index);
                    });

                });

                $(".sliderArrow .toPre").on("click",function(){slipProUp()});

                $(".sliderArrow .toNext").on("click",function(){slipNextDown()});
            }
            function fadeToggle() {
                $(".sliderPoint span").on("click",function(){
                    index = $(this).index();
                    $(this).css("background-color","lightGray").siblings("span").css("background-color","black");
                    $(figureArg[index]).fadeIn().siblings("figure").fadeOut();
                });

                $(".sliderArrow .toPre").on("click",function(){fadePro()});

                $(".sliderArrow .toNext").on("click",function(){fadeNext()});
            }
            //toggle method
            function slipProRight(){
                index === 0 ? index = imgArg.length-1:index--;
                figureArg.hide();
                if(index === imgArg.length-1){
                    $(figureArg[0]).show().css("z-index",0);
                    $(figureArg[index]).css({"left":"100%","z-index":imgArg.length}).show().animate({"left":"0"},"normal","linear",function(){
                        $(figureArg[0]).hide().css("z-index",imgArg.length);
                        $(figureArg[index]).css("z-index",1);
                    });
                }else{
                    $(figureArg[index+1]).show();
                    $(figureArg[index]).show().css("left","100%").animate({"left":"0"},"normal","linear");
                }
                pointChange();
            }
            function slipNextLeft(){
                index === imgArg.length-1 ? index = 0  : index++;
                figureArg.css("left","0").hide();
                $(figureArg[index]).show();
                if(index === 0){
                    $(figureArg[imgArg.length-1]).show().css("z-index",imgArg.length+1).animate({"left":"100%"},"normal","linear",function(){
                        $(figureArg[imgArg.length-1]).css("z-index","1");
                    });
                }else{
                    $(figureArg[index-1]).show().animate({"left":"100%"},"normal","linear");
                }
                pointChange();
            }
            function slipProUp(){
                height = $(".coverBlock").height();
                console.log("slipProUp");
                index === 0 ? index = imgArg.length-1:index--;
                figureArg.hide();
                if(index === imgArg.length-1){
                    $(figureArg[0]).show().css("z-index",0);
                    $(figureArg[index]).css({"top":-height+"px","z-index":imgArg.length}).show().animate({"top":"0"},"normal","linear",function(){
                        $(figureArg[0]).hide().css("z-index",imgArg.length);
                        $(figureArg[index]).css("z-index",1);
                    });
                }else{
                    $(figureArg[index+1]).show();
                    $(figureArg[index]).show().css("top",-height+"px").animate({"top":"0"},"normal","linear");
                }
                pointChange();
            }
            function slipNextDown(){
                height = $(".coverBlock").height();
                console.log("slipNextDown");
                index === imgArg.length-1 ? index = 0  : index++;
                figureArg.css("top","0").hide();
                $(figureArg[index]).show();
                if(index === 0){
                    $(figureArg[imgArg.length-1]).show().css("z-index",imgArg.length+1).animate({"top":-height+"px"},"normal","linear",function(){
                        $(figureArg[imgArg.length-1]).css("z-index","1");
                    });
                }else{
                    $(figureArg[index-1]).show().animate({"top":-height+"px"},"normal","linear");
                }
                pointChange();
            }
            function fadePro(){
                index === 0 ? index = imgArg.length-1:index--;
                $(figureArg[index]).fadeIn().siblings("figure").fadeOut();
                pointChange();
            }
            function fadeNext(){
                index === imgArg.length-1 ? index = 0 : index++;
                $(figureArg[index]).fadeIn().siblings("figure").fadeOut();
                pointChange();
            }
            //mouseListener
            function listener(){
                var clientX;
                var clientY;
                $("#slider").on("mousedown",function(e){
                    console.log("down");
                    clientX = e.clientX;
                    clientY = e.clientY;
                });

                $("#slider").on("mouseup",function(e){
                    if(toggle === 'horizontal'){
                        if(clientX < e.clientX){
                            console.log("向右划");
                            slipNextLeft();
                        }else if(clientX > e.clientX){
                            console.log("向左划");
                            slipProRight();
                        }
                    }else if(toggle === 'vertical'){
                        if(clientY < e.clientY){
                            console.log("向上划");
                            slipProUp();
                        }else if(clientY > e.clientY){
                            console.log("向下划");
                            slipNextDown();
                        }
                    }else if(toggle === 'fade'){
                        if(e.clientY - clientY > 100 ){
                            console.log("向上划");
                            console.log(e.clientY - clientY);
                            fadePro();
                        }else if(clientY - e.clientY > 100){
                            console.log("向下划");
                            console.log(clientY - e.clientY);
                            fadeNext();
                        }else if( e.clientX - clientX > 100){
                            console.log("向右划");
                            fadePro();
                        }else if(clientX - e.clientX > 100){
                            console.log("向左划");
                            fadeNext();
                        }
                    }
                });
            }
            //change point
            function pointChange(){
                if($(".sliderPoint span").length > 0){
                    $(pointArg[index]).css("background-color",pointColorClick).siblings("span").css("background-color",pointColor);
                }
            }
        }
    };
    window.slider = {init:slider.init};
})();

window.onload = slider.init({
    arrow:true,  //true false
    point:true,  //true false
    pointShape:"circle", //circle(原点)，square(正方形)
    pointColor:"black",  //名称，#xxxxxx
    pointColoClick:"gray",  //名称，#xxxxxx
    toggle:"horizontal",       //horizontal(水平)，vertical（垂直），fade（淡入淡出）
    mouseListener:true //true(监听)，false（不监听)
});