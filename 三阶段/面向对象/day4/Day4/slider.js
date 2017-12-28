/**
 * Created by Administrator on 2017/11/27.
 */

/*轮播：
* 属性
* speed
* effect
* size
* pos
* 方法
* dragUp()
* addButton()
* transition()
* autoplay()
* init()*/
(function(){
  /*function Slider(){
    this.speed=""
  }
  Slider.prototype.addButton=function(){}
  Slider.prototype.init=function(){}
  var slider = new Slider()
  function init(){
    // return new Slider()
    return {init:slider.init}
  }
  window.init=init
  /!*调用者*!/
  init()*/
  var index=0;
  function addButton(){}
  var slider={
    speed: 1000,
    effect: "fade",
    init:function(opt){
    //  opt
    //   1.属性赋值
    //   2.调用方法
    //   3.添加监听
      console.log("init")
      //1.有没有opt 2.有opt情况下，判断有没有属性
      // if(opt){
      //   if(opt.speed){
      //     slider.speed = opt.speed
      //   }
      // }else{
      //   slider.speed = slider.speed
      // }
      slider.speed = opt?(opt.speed||slider.speed):slider.speed;
      console.log(slider.speed);
      slider.listerner()
      slider.addButton()

      //添加事件监听 -> 某个事件被触发，要调用哪些方法
      $("#slider figure").on("dragup",slider.dragUp)

    },
    listerner: function(){
      //事件监听判断逻辑
      $("#slider figure").mousedown(function(e){
        var clickE = e;
        $(this).mousemove(function(e){
          var moveE = e;
          if(clickE.clientY - moveE.clientY > 50){
            // console.log("向上拉");
            //  jquery trigger
            //向上拉事件触发没有
            $(this).trigger("dragup")
          }
        })
      })
    },
    dragUp:function(e){
    //向上切换事件处理程序
    //  把下一张的class设为active,把自己当前class取消
      console.log("向上拉方法")
      console.log($(e.target).next("figure"));
      if($(e.target).next("figure").length>0){
        $(e.target).removeClass("active").next("figure").addClass("active")
      }else{
        console.log("else")
        $(e.target).removeClass("active");
        $("#slider figure:first-child").addClass("active");
      }
      $("#slider figure").off("mousemove");
    },
    addButton:function(){
      //添加圆点
    },
    autoplay:function(){

    }
  }
  window.mySlider = {init:slider.init}
})()
