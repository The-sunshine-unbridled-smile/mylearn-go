
const express = require("express");
const router = express.Router();
const constroller = require("../constroller/nodeconstroller");
router.post("/login.do", constroller.getUser);//连接业务控制
router.get("/index",(req,resp,next)=>{
    console.log("拦截了");
    //判断一下登录了没有
    if (req.session.username != undefined) {
        next();
    } else {
       resp.redirect("/login.html");
    }
});

module.exports = router;