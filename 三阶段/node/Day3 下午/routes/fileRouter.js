/**
 * Created by Administrator on 2017/10/19.
 */

/*app告诉路由，有请求进来了
* 判断一下是什么请求，分发任务*/

//引入fileController
const fileController = require("../controller/fileController");

//公开
module.exports.fileRouter=function(request,response){
  //知道任务是什么->任务在哪里->请求/index.html
  console.log("收到任务");
  // test();  //访问不了，一个JS文件不能直接调用访问另外一个JS的函数
  let mypath = request.url;

  //如果进来的请求是html结尾
  let myNewPath = mypath.split(".");
  console.log("拆分后"+myNewPath[1]);
  if(myNewPath[1]=="html"){
    //把任务分发出去
    console.log("发给sendHTML");
    fileController.sendFile(request,response,"html")
  }else if(myNewPath[1]=="css"){
    console.log("发给sendCSS");
    fileController.sendFile(request,response,"css")
  }else if(myNewPath[1]=="js"){
    console.log("发给sendJS");
    fileController.sendFile(request,response,"javascript")
  }else if(myNewPath[1]=="jpg"||myNewPath[1]=="png"){
    console.log("发给sendImage");
    fileController.sendImage(request,response);
  }


}