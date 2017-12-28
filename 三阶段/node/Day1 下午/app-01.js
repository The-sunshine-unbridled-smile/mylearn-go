/*服务器端JS
* ECMAScript
* 没有DOM和BOM*/
// window.alert("alert");

/*在服务器端控制台运行*/
// console.log("Hello World");

/*Day1文件夹构建项目
 -- 1.创建package.json
* Linux指令
* cd 文件夹路径，注意盘
*
* 进行项目构建 npm
* -- 进行项目配置文件的构建 管理项目里面用到的第三方的模块 npm init 创建配置文件
 * -- 安装第三方提供的模块npm install xxxx
*
* 2.创建工程目录
* public - 静态资源 - HTML CSS JS 图片 多媒体
* config - 配置文件
* controller - 业务控制器
* dao - 数据库模型
* routes - 路由分发
* */

//1.引入http模块
//COMMON JS规范 模块化 -》1.模块以require语法引入 2.module.exports导出模块
//AMD CMD规范， AMD-require.js, CMD-sea.js 客户端
//模块 - 对象:属性和方法
//定义常量 const ES6
/*const 和 var 的区别
* var a=10; a=5
* const:1.定义时候必须要初始化赋值 2.赋值后不能再改*/
const myhttp = require("http");
//2.搭建服务器

/*function (参数){函数体}
* (参数)=>{函数体}*/
const myServer = myhttp.createServer((request,response) => {
  console.log("服务器回调函数执行");
  console.log(request.url);
  //请求进来
  //响应 -1.响应头: OK HTTP状态码 200-- 404错误 2.内容编码 解析标准
  response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
  //2.响应内容
  response.write("Hello World");
  //3.响应结束
  response.end();
})

//IP+端口 给服务器配置端口
// listen(端口号,回调函数-在监听成功后会执行的函数)
myServer.listen(8888,()=>{
  console.log("端口号8888已启动");
})