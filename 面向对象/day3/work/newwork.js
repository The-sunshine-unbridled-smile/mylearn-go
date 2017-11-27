/**
 * Created by uid on 2017/11/27.
 */
(function () {
    var slider = {
        init: function (opt) {
            //先判断有没有opt，再判断有没有speed这个属性，若没有则使用默认的值
            // slider.speed = opt ? (opt.speed || slider.speed) : slider.speed;
            //调用事件监听
            slider.listener();
            $("figure").on("dragup", slider.dragUp)
        },
        listener: function () {
            $("figure").mousedown(function (e) {
                var clickE = e;
                $(this).mousemove(function (e) {
                    var moveE = e;
                    if (clickE.clientX - moveE.clientX > 50) {
                        $(this).trigger("dragup")
                    }
                })
            })
        },
        dragUp: function (e) {
            console.log($(e.target));
            if($(e.target).next("figure").length>0){
                $(e.target).removeClass("active").next("figure").addClass("active")
            }else {
                $(e.target).removeClass("active");
                $("figure:first-child").addClass("active")
            }
            $("figure").off("mousemove");  //移除移动事件
        }
    };
    window.mySlider = {init: slider.init}
})();