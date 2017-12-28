/*
* jQuery("#div").html()
* jQuery.
* $ === jQuery
* $.extend ===> $.ajax = function(){}
* $.fn.extend ===> 对象.css=function(){}
* 1. jQuery function
* 2. jQuery return值 对象*/
// var jqobj = new init()
// init.prototype.css=function(){}
// new init()
(function(){
  function jQuery(selector){
    return new Init(selector)
  }
//init.prototype.html=function(){}
// "#div", ".class", "tag"

//Init: 处理传进来的参数
// $()
  function Init(selector){
    this.node="";
//  querySelector
//  字符串拆分 charAt(0)
//  正则
    /*根据selector -> 调用对应的原生方法*/
    if(/^#/.test(selector)){
      this.node = document.getElementById(selector.substring(1))
    }else if(/^./.test(selector)){
      this.node = document.getElementsByClassName(selector.substring(1))
    }else if(/\d*/.test(selector)){
      this.node = document.getElementsByTagName(selector)
    }
  }

// $("#div").node//原生节点

// $().css()
  Init.prototype.css=function(){
    console.log("css方法");
  }

//$.ajax()
//  $.extend()
  jQuery.ajax=function(){
    console.log("ajax方法");
  }
//jQuery.extend({
// each:function(){},
// newfn:function(){}})

  /*jQuery.each=function(){}
  * jQuery.newfn=function(){}
  * */
  jQuery.extend=function(obj){
    for(var key in obj){
      jQuery[key] = obj[key]
    }
  }

  //jQuery.fn ==> 真正指向的是谁
  //jQuery.fn.extend ==> Init.prototype.extend=function(){}
  jQuery.fn = jQuery.prototype = Init.prototype

  jQuery.fn.extend=function(obj){
    for(var key in obj){
      jQuery.fn[key] = obj[key]
    }
  }


  window.jQuery = window.$ = jQuery

})()









