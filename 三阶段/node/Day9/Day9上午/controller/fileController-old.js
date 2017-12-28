/**
 * Created by Administrator on 2017/10/19.
 */
//处理具体的业务逻辑
//需要fs
const myfs = require("fs");

//专门处理html
module.exports.sendHTML=function(request,response){
  console.log("欢迎来到sendHTML");
  let mypath = request.url;
  myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
    console.log(data);
    //data打印出来-->index.html的内容，代表读取成功
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    response.write(data);
    response.end();
  })
}

//专门处理css
module.exports.sendCSS=function(request,response){
  let mypath = request.url;
  myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
    console.log(data);
    response.writeHead(200,{"content-type":"text/css;charset=utf-8"});
    response.write(data);
    response.end();
  })
}

//专门处理JS
module.exports.sendJS = function(request,response){
  let mypath = request.url;
  myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
    console.log(data);
    response.writeHead(200,{"content-type":"text/javascript;charset=utf-8"});
    response.write(data);
    response.end();
  })
}

//专门处理图片
module.exports.sendImage=function(request,response){
  let mypath = request.url;
  let myNewPath = mypath.split(".")[1];
  myfs.readFile("public"+mypath,(err,data)=>{
    response.writeHead(200,{"content-type":"image/"+myNewPath[1]});
    response.write(data);
    response.end();
  })
}

