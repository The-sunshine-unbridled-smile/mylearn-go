const myhttp = require("http");
//file system fs
const myfs = require("fs");

const myServer = myhttp.createServer((request,response) => {
  console.log("服务器回调函数执行");
  console.log(request.url); //请求的是什么文件 请求路径 /index.html

  //1.文档位置
  //2.字符编码
  //3.回调函数 --》当文件读取成功/失败 --》读取到的文件响应给客户端

  let mypath = request.url;

  //如果进来的请求是html结尾
  let myNewPath = mypath.split(".");
  console.log("拆分后"+myNewPath[1]);
  if(myNewPath[1]=="html"){
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
      console.log(data);
      //data打印出来-->index.html的内容，代表读取成功
      response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
      response.write(data);
      response.end();
    })
  }else if(myNewPath[1]=="css"){
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
      console.log(data);
      response.writeHead(200,{"content-type":"text/css;charset=utf-8"});
      response.write(data);
      response.end();
    })
  }else if(myNewPath[1]=="js"){
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
      console.log(data);
      response.writeHead(200,{"content-type":"text/javascript;charset=utf-8"});
      response.write(data);
      response.end();
    })
  }else if(myNewPath[1]=="jpg"||myNewPath[1]=="png"){
    myfs.readFile("public"+mypath,(err,data)=>{
      response.writeHead(200,{"content-type":"image/"+myNewPath[1]});
      response.write(data);
      response.end();
    })
  }


})

//IP+端口 给服务器配置端口
// listen(端口号,回调函数-在监听成功后会执行的函数)
myServer.listen(8888,()=>{
  console.log("端口号8888已启动");
})