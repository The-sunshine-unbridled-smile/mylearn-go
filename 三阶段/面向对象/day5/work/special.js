/**
 * Created by uid on 2017/11/28.
 */
$.fn.extend({
    mypic:function (obj) {
        if(obj){
           switch (obj.effect){
               case "a":this.addClass("effect-lily");
               break;
               case "b":this.addClass("effect-sadie");
                   break;
               case "c":this.addClass("effect-layla");
                   break;
           }
        }
    }
});


/*

function $() {
    return new Base()
}
function Base() {
    this.element=[];
    //增加hover事件
    Base.prototype.hover = function(over,out){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].onmouseover = over;
            this.elements[i].onmouseout = out;
        }
        return this;
    };
    //设置显示
    Base.prototype.show = function(){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].style.display = 'block';
        }
        return this;
    };
//设置隐藏
    Base.prototype.hide = function(){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].style.display = 'none';
        }
        return this;
    };

}*/
