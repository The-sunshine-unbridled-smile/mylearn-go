
const express = require("express");
const path = require("path");
const router = express.Router();
const constroller = require("../constroller/indexconstroller");
router.post("/login.do", constroller.getUser);//连接业务控制
router.get("/getUsername.do",constroller.getUsername);
router.get("/index.html",(req,resp,next)=>{
    console.log("拦截了");
    // resp.send("被拦截下来了");
    //判断一下登录了没有
    if (req.session.username != undefined) {

        next();
    } else {
       resp.redirect("/Login.html");
    }
});

//=======================================角色部分==========================
//角色管理的增删改查业务连接
router.get("/roleMan.do", constroller.getRole);
router.get("/xgrole.do", constroller.getxgrole);
router.get("/deleterole.do", constroller.getscrole);
router.get("/addrole.do", constroller.getaddrole);
router.get("/seach.do", constroller.getseachrole);
//==================================班级部分===============================
//班级管理的增删改查业务连接
router.get("/class.do", constroller.getClass);
router.get("/addclass.do", constroller.getaddClass);
// router.get("/deleteclass.do", constroller.getDeleteClass);
router.get("/xgclass.do", constroller.getxgclass);
router.get("/seachclass.do", constroller.getseachclass);
//分页显示
router.get("/getPageTotal.do", constroller.getPageclass);
//===============================课程部分====================================
router.get("/course.do", constroller.getCourse);
//分页
router.get("/getCoursePage.do", constroller.getPagecourse);

//===========学生部分ejs=============
router.get("/student",(req,res)=>{
    res.redirect("/student/1")
});
router.get("/student/:page",constroller.getAllStudent);

//=================邮件==========
router.post("/sendMail.do",constroller.sendMail);


module.exports = router;