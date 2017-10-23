/*1.引入mysql*/
const dbpool = require("../config/dbpoolconfig"); //dbpool
const studentController = {
    addStudent(req,resp){
    //使用封装的dbpoolconfig
    // db.config.database=""
    console.log("add student");
    dbpool.connect("insert into t_student values (?,?,?,?,?,?)",
      [null,req.query.stuid,req.query.stuname,req.query.score,req.query.classid,req.query.sex],
      (err,data)=>{
       if(!err){
         console.log(data);
         resp.send("登记成功")
       }else{
         console.log(err)
         resp.send(err.message)
       }
      })
  }
}

module.exports = studentController;