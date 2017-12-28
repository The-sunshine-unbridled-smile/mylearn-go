/**
 * Created by uid on 2017/10/19.
 */
/*引入http模块
 * */
const myhttp = require("http");
/**
 * 导入router
 */
const router = require("./routes/fileRouter.js");

/*
 *搭建服务器
 */
const myServer = myhttp.createServer((request, response) => {
    console.log("服务回调函数执行");
    // response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    //告诉Router有请求来了，要去分任务，直接把任务转给Router
    router.fileRouter(request, response);
    // response.end("");
});

/*
 *监听端口
 */
myServer.listen(8881, () => {
    console.log("端口号已经启动")
});