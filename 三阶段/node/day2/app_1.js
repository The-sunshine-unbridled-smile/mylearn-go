const express=require("express");//服务器插件
const indexrouter=require("./routes/indexrouter");//导入路由
const logger=require("morgan");//日志插件
const bodypaser=require("body-parser");//post提交方式的
const favicon=require("serve-favicon");//图标插件
const app=express();//搭建服务器
app.use(bodypaser.urlencoded({extended :false}));
app.use(indexrouter);//连接路由部分
app.use(logger("dev"));//日志文件

app.use(express.static(__dirname+"/public/GLXT"));//导入静态资源页面
app.use(favicon(__dirname+"/public/GLXT/images/kitty.ico"));//使用页面图标
app.listen(8888,()=>{console.log("服务器启动成功")});