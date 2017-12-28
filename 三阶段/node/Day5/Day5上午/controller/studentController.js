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
  },
    getStudent(req,resp){
      let stuname = req.query.stuname||"";
      let stuid = req.query.stuid||"";
      let grade = req.query.grade||"";
      let sex = req.query.sex||"";
      console.log(stuid)
      //sql语句
     let sql="select * from t_student where 1=1";
     let params = [];
     if(stuname!=""){
       sql += " and stuname like ?"
       stuname = "%"+stuname+"%";
       params.push(stuname)
     }
     if(stuid!=""){
       sql += " and stuid = ?"
       params.push(stuid)
     }
     if(grade!=""){
       sql += " and grade = ?"
       params.push(grade)
     }
    if(sex!=""){
      sql += " and sex = ?"
      sex = sex.trim(); //varchar前面有空格他也是当成字符一起解析，把前后空格去掉
      params.push(sex)
    }

     console.log(sql);
     console.log(params);
    dbpool.connect(sql,params,(err,data)=>{
      console.log(data);
      resp.send(data)
    })
  }
}

module.exports = studentController;