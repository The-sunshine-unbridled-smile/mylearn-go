/*===session and cookie===*/
// npm install express-session --save
//npm install cookie-parser --save //只存session标识，不会存会话数据


/*所有第三方的模块引入*/
const express = require("express");
const logger = require("morgan"); //日志
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");  //处理POST数据
const path = require("path"); //处理路径
const session = require("express-session");
const cookieParser = require("cookie-parser");

/*自己写的模块引入*/
const route = require("./routes/indexRouter")

// --把express调用》》创建项目的实例,搭建了服务器
const app = express();
/*公共变量locals-app,req,resp*/
// app.locals.username = "公共变量"
// app.locals.username=req.session.username;



//=========EXPRESS配置============
//==========session and cookie==============
app.use(cookieParser());
app.use(session({
  name:"demo140a",  //cookie名称，默认connect.sid
  secret:"123123123", //结合其他加密的方式生成secret
  cookie:{maxAge:300000}, //cookie配置：有效时间
  resave:true,
  rolling:true,
  saveUninitialized:true    //未初始化cookie要不要保存
}));


//日志配置
app.use(logger("dev")); //调用日志，配置为dev模式
//图标
app.use(favicon(__dirname+"/public/images/favicon.ico"));

//视图引擎配置
//npm install ejs --save
app.set("views",path.join(__dirname,"views"));  //视图文件路径
//视图解析的引擎
//EJS, Jade/Pug
app.set("view engine","ejs");

//POST数据读取
app.use(bodyParser.urlencoded({extended:false})) //读取POST数据
app.use(bodyParser.json());

//集成了路由
//告诉Router有请求来了，要去分任务，直接把任务转给Router
app.use(route)  //使用模块
//静态资源在哪里
// app.use(express.static(__dirname+"/public"));
app.use(express.static(path.join(__dirname,"public")));
//进行多个静态资源的配置
// app.use(express.static(__dirname+"/public/html"));
app.use(express.static(path.join(__dirname,"public/html")));


/*捕获错误页面*/
app.use((req,resp)=>{
  /*状态码是302 ---> 跳转*/
  /*404*/
  resp.status(404);
  // resp.redirect("404.html"); //302
  //__dirname/public/404.html
  //fs.readFile(404)
  resp.sendFile(path.join(__dirname,"public","404.html"))
  // resp.send("<h1>找错了...</h1>")
})


//监听端口
app.listen(8888,()=>{console.log("服务器8888启动")})