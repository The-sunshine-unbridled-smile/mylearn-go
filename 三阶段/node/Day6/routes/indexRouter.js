/*GET POST PUT DELETE*/
//Express的路由
const express = require("express");
const path = require("path");

const userController =  require("../controller/userController")
const studentController =  require("../controller/studentController")
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

router.post("/reg.do",userController.addUser2)
router.post("/reg.do",userController.addUser2)

router.get("/addStudent.do",studentController.addStudent)

router.get("/checkuser.do",userController.checkUser)
router.post("/checkuser.do",userController.checkUser)

router.get("/getAllUser.do",userController.getAllUser)

router.get("/searchUser.do",userController.getAllUser)


router.get("/getUser.do",userController.getUserById)

router.get("/getStudent.do",studentController.getStudent)


//分页

router.get("/getPageTotal.do",studentController.getPageTotal)
/*router.get("/day3.html",(req,resp)=>{
  // resp.sendFile("F:/140Acode/Node/Day3/public/day3.html")
  //sendFile(1.文件夹路径， 2.文件名)
  //path - 路径合并操作 routes/../public

  //进行判断
  resp.sendFile(path.join(__dirname, '../public', 'success.html'));
  // res.sendFile('../public/index.html', {root: __dirname});
})*/


/*====day6*/
router.post("/regUser.do",userController.addUser3)
module.exports=router