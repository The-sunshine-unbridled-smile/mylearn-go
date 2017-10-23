/**
 * Created by Mr.袁 on 2017/10/20.
 */
 const express=require("express");
 const router=express.Router();
 const constroller=require("../constroller/indexconstroller");
 router.get("/login.do",constroller.getUser);//连接业务控制
 router.get("/roleMan.do",constroller.getRole);
 router.get("/xgrole.do",constroller.getxgrole);
 router.get("/deleterole.do",constroller.getscrole);
 router.get("/addrole.do",constroller.getaddrole);
 router.get("/seach.do",constroller.getseachrole);
 module.exports=router;