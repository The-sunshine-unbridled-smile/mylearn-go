/*=========================引入模块=================================*/
const express = require("express");  //引入express模块
const logger = require("morgan");   //引入日志
const favicon = require("serve-favicon");  //移入图标模块

//调用express 创建项目实例，搭建了服务器
const app = express();

// ============================= 配置==================================
app.use(logger("dev")); //调用日志，配置为Dev模式
//集成了路由，只需要告诉静态资源在哪里即可
app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + "/public/images/pass.png"));
//================================监听端口=================================
app.listen(8888, () => {
    console.log("服务器8888已启动");
});