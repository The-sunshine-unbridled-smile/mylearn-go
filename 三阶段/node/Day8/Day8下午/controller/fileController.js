/**
 * Created by Administrator on 2017/10/19.
 */
//处理具体的业务逻辑
//需要fs
const myfs = require("fs");
const fileController = {
  mypath:"",
  //ES6 对象方法简写
  //sendFile:function(){}
  sendFile(request,response,type){
    this.mypath = request.url;
    myfs.readFile("public"+this.mypath,"utf-8",(err,data)=>{
      console.log(data);
      //data打印出来-->index.html的内容，代表读取成功
      response.writeHead(200,{"content-type":"text/"+type+";charset=utf-8"});
      response.write(data);
      response.end();
    })
  },
  sendImage(request,response){
    this.mypath = request.url;
    let myNewPath = this.mypath.split(".")[1];
    myfs.readFile("public"+this.mypath,(err,data)=>{
      response.writeHead(200,{"content-type":"image/"+myNewPath[1]});
      response.write(data);
      response.end();
    })
  }
}

//对象公开
module.exports = fileController

//如果你搞不清楚exports和module.exports, 直接用module.exports

//普通函数
//作用域只有在自己的文件里
function test(){
  console.log("test 函数");
  console.log(module.exports); //对象
  console.log(exports)
  console.log(module.exports===exports); //都指向了一个对象
  //exports 只是module.exports的别名
}
