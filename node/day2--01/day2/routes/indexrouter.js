const express = require("express");
const path = require("path");
const router = express.Router();
const constroller = require("../constroller/indexconstroller");
router.post("/login.do", constroller.getUser);//连接业务控制
router.get("/getUsername.do", constroller.getUsername);
router.get("/index.html", (req, resp, next) => {
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
router.get("/student", (req, res) => {
    res.redirect("/student/1")
});
router.get("/student/:page", constroller.getAllStudent);

//=================邮件==========
router.post("/sendMail.do", constroller.sendMail);

//====================VUE====================
router.get('/product.do', (req, resp) => {
    var data = [
        {id: 1, name: '产品1', img: 'images/1.jpg', sub: '产品副标题1', price: 30, content: '产品1详情文字内容'},
        {id: 2, name: '产品2', img: 'images/2.jpg', sub: '产品副标题2', price: 50, content: '产品1详情文字内容'},
        {id: 3, name: '产品3', img: 'images/3.jpg', sub: '产品副标题3', price: 20, content: '产品1详情文字内容'},
        {id: 4, name: '产品4', img: 'images/4.jpg', sub: '产品副标题4', price: 60, content: '产品1详情文字内容'}
    ];
    resp.send(data)
});


module.exports = router;