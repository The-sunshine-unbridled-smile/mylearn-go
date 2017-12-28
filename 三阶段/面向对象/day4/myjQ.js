/**
 * Created by uid on 2017/11/27.
 */
//封装类似于JQuery的连缀
/*
 思路：一个操作后再返回本来的对象this，将获取的元素放入一个数组内部。通过原型添加方法;
 为了能在原型对象中添加方法；这个应该用函数来建立原型对象
 function Base(){
 this.getId=function(id){
 return this;
 }
 使用的时候，需要new一个实例对象
 var newBase=Base（）；
 }
 */
function Base(){
    this.element=[];
    //获取ID
    this.getId=function(id){
        //将所获取的元素放入数组里面，返回当前对象
        this.element.push(document.getElementById(id));
        // return this.element.length
        return this
    };
    //获取className，遍历push
    this.getClass=function(name){
        var names=document.getElementsByClassName(name);
        for( var i=0;i<names.length;i++){
            this.element.push(names[i])
        }
        return this;
    };
    //获取tagName；遍历push
    this.getTag=function(tags){
        var tags=document.getElementsByTagName(tags);
        for(var i=0;i<tags.length;i++){
            this.element.push(tags[i])
        }
        return this;
    }
}
//通过原型添加方法：
Base.prototype.css=function(attr,value){
    //遍历选取当前元素
    for(var i=0;i<this.element.length;i++){
        this.element[i].style[attr]=value;
    }
    return this;
};
var newBase= new Base();
// newBase.getId("idTest").css("background","red")  //id的测试
// newBase.getClass("classTest").css("color","blue");  //class的测试
newBase.getTag("h1").css("color","red")      //标签名的测试
