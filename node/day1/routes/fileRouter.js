/**
 * Created by uid on 2017/10/19.
 */
//引入fileController
let fileController=require("../controller/fileController.js");
/*app.js告诉路由有请求进来了
 * 判断是什么请求，开始分发任务
 * */
//module.exports是一个对象，有属性和方法
module.exports.fileRouter = function (request, response) {    //function里面的参数是从app.js传过来的
    //知道任务是什么=》任务在哪里=》请求index.html
    console.log("收到任务");
    let mypath = request.url;    //收到的是什么文件类型，之后判断
    let myNewPath = mypath.split(".");
    let len = myNewPath.length - 1;
    if(myNewPath[len]=="html"){
        console.log("发送给sedHTML");
        fileController.sendHTML(request,response);
    }else if(myNewPath[len]=="css"){
        console.log("发送给sendCSS");
        fileController.sendCSS(request,response);
    }else if(myNewPath[len]=="js"){
        console.log("发送给sendJS");
        fileController.sendJS(request,response);
    }else if(myNewPath[len]=="jpg"||myNewPath[len]=="png"){
        console.log("发送给sendImageE");
        fileController.sendImage(request,response);
    }
};