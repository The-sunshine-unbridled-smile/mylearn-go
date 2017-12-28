const myhttp = require("http");

//导入Router
const router = require("./routes/fileRouter.js"); // 得到一个对象，对象里面现在有一个方法，fileRouter()
const myServer = myhttp.createServer((request,response) => {
  console.log("服务器回调函数执行");
  //告诉Router有请求来了，要去分任务，直接把任务转给Router
  router.fileRouter(request,response);
})

//IP+端口 给服务器配置端口
// listen(端口号,回调函数-在监听成功后会执行的函数)
myServer.listen(8888,()=>{
  console.log("端口号8888已启动");
})