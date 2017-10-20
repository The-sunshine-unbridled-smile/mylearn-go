/**
 * Created by uid on 2017/10/19.
 */
//处理的具体业务逻辑
const myfs = require("fs");
const url=require("url");
//专门处理HTML
module.exports.sendHTML = function (request, response) {
    console.log("来到了sendHTML");
    let mypath =url.parse(request.url).pathname ;
    //readFile（文档位置，字符编码，回调函数-当文件读取成功后调用-读取到的文件响应给客户端）
    myfs.readFile("public" + mypath, "utf-8", (err, data) => {
        console.log(data);//打印正确的位置，err错误的位置信息
        //请求进来
        //响应-- writeHead1.1：响应头: OK HTTP状态码 200-- 404错误 2.内容编码 解析标准
        response.writeHead(200, {"content-type": "text/html;charset=utf-8"});
        //2：响应内容
        response.write(data);
        //3：响应结束
        response.end();
    })
};

//专门处理css
module.exports.sendCSS = function (request, response) {
    let mypath = request.url;
    myfs.readFile("public" + mypath, "utf-8", (err, data) => {
        console.log(data);
        response.writeHead(200, {"content-type": "text/css;charset=utf-8"});
        response.write(data);
        response.end();
    })
};

//专门处理js
module.exports.sendJS = function (request, response) {
    let mypath = request.url;
    myfs.readFile("public" + mypath, "utf-8", (err, data) => {
        console.log(data);
        response.writeHead(200, {"content-type": "text/javascript;charset=utf-8"});
        response.write(data);
        response.end();
    })
};

//专门处理图片
module.exports.sendImage = function (request, response) {
    let mypath = request.url;
    let myNewPath = mypath.split(".");
    let len = myNewPath.length - 1;
    myfs.readFile("public" + mypath, (err, data) => {
        console.log(data);
        response.writeHead(200, {"content-type": "image/" + myNewPath[len]});
        response.write(data);
        response.end();
    })
};