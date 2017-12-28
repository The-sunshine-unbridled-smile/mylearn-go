const express=require("express");//服务器插件
const indexrouter=require("./routes/indexrouter");//导入路由
const logger=require("morgan");//日志插件
const bodypaser=require("body-parser");//post提交方式的
const favicon=require("serve-favicon");//图标插件
const session=require("express-session");
const cookieParser=require("cookie-parser");
const ejs=require("ejs");
const  path=require("path");
const app=express();//搭建服务器
app.use(cookieParser());
app.use(session({
    name:"studentproject",
    secret:"123123123",
    cookie:{maxAge:30000000000000000},
    resave:true,
    rolling:true,
    saveUninitialized:true
}));

//配置post
app.use(bodypaser.urlencoded({extended :false}));
app.use(bodypaser.json());

/*CORS-受限拦截所有进来的请求，给他们加上一个响应头=》继续执行next（）*/
app.use('*',(req,resp,next)=>{
    resp.header("Access-Control-Allow-Origin","*");
    resp.header("Access-Control-Allow-Headers","X-Requested-With");
    resp.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    resp.header("X-Powered-by",'3.2.1');
    resp.header("Content-Type","application/json;charset=utf-8");
    next();
});

app.use(indexrouter);//连接路由部分s
app.use(logger("dev"));//日志文件
app.use(express.static(__dirname+"/public/GLXT"));//导入静态资源页面
app.use(favicon(__dirname+"/public/GLXT/images/kitty.ico"));//使用页面图标

//配置ejs
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.listen(8888,()=>{console.log("服务器启动成功")});
