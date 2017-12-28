const express=require("express");//服务器插件
const indexrouter=require("./routes/noderouter");//导入路由
const logger=require("morgan");//日志插件
const bodypaser=require("body-parser");//post提交方式的
const favicon=require("serve-favicon");//图标插件
const session=require("express-session");
const cookieParser=require("cookie-parser");
const path=require("path");
const app=express();//搭建服务器
app.use(cookieParser());
app.use(session({
    name:"nodepractice",
    secret:"123123123",
    cookie:{maxAge:300000},
    resave:true,
    rolling:true,
    saveUninitialized:true
}));

app.use(bodypaser.urlencoded({extended :false}));

//配置ejs
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(indexrouter);//连接路由部分s
app.use(logger("dev"));//日志文件
app.use(express.static(__dirname+"/public"));//导入静态资源页面
app.use(favicon(__dirname+"/public/images/kitty.ico"));//使用页面图标
app.listen(8883,()=>{console.log("服务器启动成功")});
