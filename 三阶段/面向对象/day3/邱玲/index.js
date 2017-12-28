//
// lunbo();
// setInterval(lunboShow,4000);

//轮播点点位置
$(function () {
    $("#changeDiana").change(function () {
        var Dian = $("#changeDiana option:selected").text();
        console.log("diandian      ", Dian);
        if (Dian === "右") {
            $("#changeDot").attr("class", "dotRight");
            $(".dot").attr("class", "dotLr");
            $(".dotBot").attr("class", "dotLr");
        } else if (Dian === "左") {
            $("#changeDot").attr("class", "dotLeft");
            $(".dot").attr("class", "dotLr");
            $(".dotBot").attr("class", "dotLr");
        } else if (Dian === "下") {
            $("#changeDot").attr("class", "dotBottom");
            $(".dot").attr("class", "dotBot");
            $(".dotLr").attr("class", "dotBot");
        }
    });
});
//淡入淡出效果
function lunbo(x) {
    var img = x;
    var i = 0;
    var len = img.length;
    var time = setInterval(fun, 4000);

    function fun() {
        img.eq(i % len).fadeToggle(1000);
        img.eq((i - 1) % len).fadeToggle(1000);
        i++;
    }
};
//滑动效果
function lunbo1(x) {
    var img = x;
    var i = 0;
    var len = img.length;
    var time = setInterval(fun, 4000);

    function fun() {
        img.eq(i % len).slideToggle(1000);
        img.eq((i - 1) % len).slideToggle(1000);
        i++;
    }
};
//翻书效果
function lunbo2(x) {
    var img = x;
    var sildWidth = $("#slider").width();
    console.log("slid  ", sildWidth);
    var i = 0;
    var len = img.length;
    var time = setInterval(fun, 3000);

    function fun() {
        console.log("selector ", img.selector , "length" , img.length );
        let last = img.last(); //   最后一个
        let first = img.first(); // 第一个
        let figure1 = img.eq(1);
        var lastClone = last.clone();
        // first.find("images").animate({width: "px"}, 0);
        // first.find("images").andSelf().animate({height: "1px"},3000,function(){
        //     first.remove();
        //     last.after(firstClone);
        //     images = $(images.selector);
        // });
        last.find("img").andSelf().animate({width:"0px"},function(){
            last.remove();
            first.before(lastClone);
            img = $(img.selector);
        });
    }
};
function CarouselEffect(effectList) {
    this.effects = effectList;
    this.show=function(showIndex) {
        //  TODO   abstract
        console.log("CarouselEffect show");
    };
    this.play=function(){
        // TODO    abstract
        console.log("CarouselEffect play");
    };
    //  提供实现覆盖注入
    this.extendFn=function (method, fn) {
        if(typeof fn === "function") {
            this[method] = fn;
        }
    };
    //  通用注入
    this.extend=function (key, ext) {
        this[key] = ext;
    }
}
//  可拷贝继承  公共基础类
function CopyExtendsAbled() {
    this.construct=function (copyFrom) {    //  构造拷贝
        for(key in copyFrom) {
            this[key] = copyFrom[key];
        }
    };
}

//  左飞出
function FlyLeftCarouselEffect(effectList){
    var carouse = new CarouselEffect(effectList); //    超类
    this.construct(carouse);    //  执行拷贝，完成继承
    console.log("effects ", this.effects);
    this.showStatus = "";
    this.show = function (showIndex) {  // implements CarouselEffect.show
        var maxIndex = this.effects.length - 1;
        if(showIndex==maxIndex) {
            return ;
        }
        var moveCount = maxIndex - showIndex;
        var movelist = [];
        for(index=showIndex+1 ; maxIndex>=index ; ++index){
            movelist.push(this.effects[index]);
        }
        //  停止自动播放
        window.clearInterval(this.interval);
        this.interval=undefined;
        this.moveEffect(movelist);
    };
    this.moveEffect=function (moveList) {
        console.log("FlyLeftCarouselEffect moveEffect  " , moveList.length);
        let pop = moveList.pop();
        if(undefined!==pop) {
            let first = this.effects.first();
            // let last = this.effects.last();
            let last = $(pop);
            console.log("hide pop  ", pop);
            var lastClone = last.clone();
            var carouse = this;
            //  回调中this发生变化，使用变量
            last.find("img").andSelf().animate({width:"0px"},function(){
                last.remove();
                first.before(lastClone);
                carouse.effects = $(carouse.effects.selector);
                //  递归下一个
                carouse.moveEffect(moveList);
            });
        }else {
            //  自动播放

            if (this.showStatus  != "next") {
                this.play();
            }
        }
    };
    this.play=function () {
        //  timeout中的this关键字冲突，会发生变化，使用变量代替。
        var carouse = this;
        carouse.interval = setInterval(function () {
            carouse.next();
        }, carouse.timeout || 3000);
    };

    this.next=function () {
        this.showStatus = "next";
        this.moveEffect([this.effects[this.effects.length-1]]);
    };
    // carouse = this;
    // return carouse;
}
//  继承可拷贝方法
FlyLeftCarouselEffect.prototype = new CopyExtendsAbled();
//  继承CarouselEffect
// FlyLeftCarouselEffect.prototype = CarouselEffect.prototype;


/*
 * 轮播 TODO
 */
/*
 var Imgwidth = $("#slider").width();
 var ImgLength = $("images").length;
 console.log("imgwidth",Imgwidth);
 console.log("imglength",ImgLength);
 function lunbo(){
 var index = 0;
 var time = setInterval(function(){
 index++;
 var x = index * Imgwidth;
 $("figure").stop(false,true);
 if(index == ImgLength){
 index = 0;
 $("figure").animate({
 left: -x
 },1000,function () {
 $("figure").css({
 left:0
 })
 })
 }else{
 $("figure").animate({
 left:-x
 },1000)
 }
 },2000)
 }*/

// lunbo();