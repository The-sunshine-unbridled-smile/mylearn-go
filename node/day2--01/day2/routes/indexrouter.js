/**
 * Created by Mr.袁 on 2017/10/20.
 */
const express = require("express");
const router = express.Router();
const constroller = require("../constroller/indexconstroller");
router.get("/login.do", constroller.getUser);//连接业务控制
//角色管理的增删改查业务连接
router.get("/roleMan.do", constroller.getRole);
router.get("/xgrole.do", constroller.getxgrole);
router.get("/deleterole.do", constroller.getscrole);
router.get("/addrole.do", constroller.getaddrole);
router.get("/seach.do", constroller.getseachrole);

//班级管理的增删改查业务连接
router.get("/class.do", constroller.getClass);
router.get("/addclass.do", constroller.getaddClass);
// router.get("/deleteclass.do", constroller.getDeleteClass);
router.get("/xgclass.do", constroller.getxgclass);
router.get("/seachclass.do", constroller.getseachclass);
module.exports = router;