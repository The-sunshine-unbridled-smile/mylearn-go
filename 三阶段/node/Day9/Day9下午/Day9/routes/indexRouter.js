/*GET POST PUT DELETE*/
//Express的路由
const express = require("express");
const path = require("path");

const userController =  require("../controller/userController")
const studentController =  require("../controller/studentController")
const deptController = require("../controller/deptController")
const uploadController = require("../controller/uploadController")
const upload = require("../config/uploadconfig")

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
router.post("/regUser.do",userController.addUser3) //DAO
router.post("/regUser2.do",userController.addUser4);//Promise


/*====dept*/
router.get("/getDept.do",deptController.getDept)


/*=====EJS=======*/
// router.get("/studentlist",studentController.getAllStudent)
router.get("/studentlist",(req,resp)=>{
  resp.redirect("/studentlist/1")
});
/*动态路由拦截 :page*/
router.get("/studentlist/:page",studentController.getAllStudent)
router.get("/detail",studentController.getDetail)
/*=========day8 session cookie=========*/
router.post("/newlogin.do",userController.newLogin);
router.get("/getUsername.do",userController.getUsername)
router.get("/vip.html",(req,resp,next)=>{
  console.log("拦截了");
  // resp.send("被拦截下来了");
  //判断一下登录了没有
  console.log(req.session.username);
  if(req.session.username!=undefined){
    //username有值,代表登录
    // resp.sendFile(path.join(__dirname,"../public/vip.html"))
    //继续去执行，执行static读取vip.html返回
    next();
    // resp.redirect("vip.html"); //导致重定向过多，死循环
  }else{
    resp.redirect("login.html")
  }
})
/*上传文件的流程
* 1.使用multer来去读取form multipart(文件)
* multer:
* 配置: 1.destination文件存放的位置 2.filename 文件上传后的名字，默认是随机，不带后缀名
* 配置完毕把配置的内容写到multer({storage属性})，返回上传上传对象，导出upload
* 2.在路由:
* 拦截上传的post请求，然后通过upload对象调用single方法("表单file的name值")
* 单个文件: req.file*/
router.post("/uploadFile.do",upload.single("myfile")/*,uploadController.uploadFile*/)
//多个文件array方法
//upload.array("name值");
//访问多个文件 req.files ->数组，每个文件单独对象

router.get("/getImage.do",uploadController.getImage)
module.exports=router
