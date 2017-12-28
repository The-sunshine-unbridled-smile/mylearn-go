const multer = require("../config/uploadconfig");
const dbpool = require("../config/dbpoolconfig");
const fileController = {
  uploadFile(req,resp){
    console.log("uploadcontroller")
    console.log(req.file) //对象，得到路径位置
    let pathname = "uploads/"+req.file.filename
    dbpool.connect("update t_user set u_imgsrc =? where u_username=?",[pathname,"abc"],(err,data)=>{
      console.log(data);
      resp.send("上传成功")
    })
  },
  getImage(req,resp){
  //  请求数据库
    dbpool.connect("select * from t_user where u_username=?",["admin"],
      (err,data)=>{
      resp.send(data);
      })

  }
}
module.exports=fileController