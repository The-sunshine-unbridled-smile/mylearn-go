/**
 * Created by uid on 2017/10/20.
 */

const express = require("express");
const studentrController =  require("../controller/studentController");
//获取路由对象
const router = express.Router();
/*=========请求处理==========*/
router.route("/login.do")
    .get(studentrController.getUser)
    .post(studentrController.postUser);

module.exports=router;