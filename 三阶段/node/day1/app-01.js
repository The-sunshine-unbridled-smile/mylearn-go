/**
 * Created by uid on 2017/10/19.
 */
/*引入http模块*/
const myhttp = require("http");
const myfs = require("fs");
/*搭建服务器*/
/*readFile(文档的位置，字符编码，回调函数--读取到的文件相应给客户端  err返回错误的位置 data返回成功的位置)*/
const myServer = myhttp.createServer((request, response) => {
    console.log("服务器回调函数执行");
    //请求进来
    let mypath=request.url;  //请求的文件路径  index.html
    let myNewPath=mypath.split(".");  // 把请求进来的文件类型进行拆分 index,html
    if(myNewPath[1]=="html"){
        myhttp.readFile("public"+mypath,"utf-8",(err,data)=>{
            console.log(data); //如果能够打印出来index.html的内容代表读取成功
            response.writeHead(200,{"content-type":"text/html;charset=utf-8"}); //响应头：OK HTTP状态码 200-- 404错误 2.内容编码 解析标准
            response.write(data);  //响应的内容
            response.end();    //响应结束
        })
    }
});
/*配置端口IP+端口
 * listen（端口号，回调函数--在监听成功后会执行的函数）
 * */
myServer.listen(8888, () => {
    console.log("端口号已启动")
});