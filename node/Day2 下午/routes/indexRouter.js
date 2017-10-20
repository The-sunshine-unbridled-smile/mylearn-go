/*GET POST PUT DELETE*/
//Express的路由
const express = require("express");

const userController =  require("../controller/userController")

//获取路由对象
const router = express.Router()

/*=========请求处理==========*/
//1.拦截请求->判断什么样的请求进来了
//2.进行任务分发

/*1.基础拦截
* 1.拦截地址, 2.回调函数-拦截成功后要做什么-逻辑应该交给Controller*/
/*router.get("/login.do",(request,response)=>{
  console.log("路由接收到login.do任务");
  response.send("收到!")
})*/
/*1.基础方式*/
// router.get("/login.do",userController.getUser);
// router.post("/login.do",userController.postUser);

/*2.多种拦截 -- 实现链式调用
* 对一个路径配置多个拦截方式*/
router.route("/login.do")
  .get(userController.getUser)
  .post(userController.postUser)

module.exports=router