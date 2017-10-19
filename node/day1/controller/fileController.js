/**
 * Created by uid on 2017/10/19.
 */
//处理的具体业务逻辑
const myfs=require("fs");

//专门处理HTML
module.exports.sendHTML=function(request,response){
    console.log("来到了sendHTML");
    let mypath=request.url;
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
          console.log(data);
          response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
          response.write(data);
          response.end();
        })
};

//专门处理css
module.exports.sendCSS=function (request,response) {
    let mypath=request.url;
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
        console.log(data);
        response.writeHead(200,{"content-type":"text/css;charset=utf-8"});
        response.write(data);
        response.end();
    })
};

//专门处理js
module.exports.sendJS=function (request,response) {
    let mypath=request.url;
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
        console.log(data);
        response.writeHead(200,{"content-type":"text/javascript;charset=utf-8"});
        response.write(data);
        response.end();
    })
};

//专门处理图片
module.exports.sendImage=function (request,response) {
    let mypath=request.url;
    let myNewPath=mypath.split(".");
    let len = myNewPath.length-1;
    myfs.readFile("public"+mypath,"utf-8",(err,data)=>{
        console.log(data);
        response.writeHead(200,{"content-type":"image/"+myNewPath[len]});
        response.write(data);
        response.end();
    })
};