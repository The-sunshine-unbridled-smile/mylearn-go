/**
 * Created by uid on 2017/10/19.
 */
/* 1：引入http模块;
模块化》》》1：模块以require引入 2：以module.exports导出模块
引入的模块的就是一个对象，是对象就有属性和方法
 * */
//const定义的是常量：不可变。定义时必须要初始化赋值，赋值后不能再改
const myhttp = require("http");

/**
 * 导入router
 */
const router = require("./routes/fileRouter.js");

/*
 :2：搭建服务器
 */
const myServer = myhttp.createServer((request, response) => {
    console.log("服务器回调函数执行");
    // response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    //告诉Router有请求来了，要去分任务，直接把任务转给Router
    router.fileRouter(request, response);
    // response.end("");
});

/*
 :3：监听端口  listen（端口号，回调函数-在监听成功后会执行的函数）
 */
myServer.listen(8881, () => {
    console.log("端口号已经启动")
});