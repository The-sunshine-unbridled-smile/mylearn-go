/*1.引入mysql*/
const dbpool = require("../config/dbpoolconfig"); //dbpool
const studentController = {
    pageCount:3,
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
      // 1.每页有3条数据 studentController.pageCount
      // 2.前台当前在第几页 req.query.currentPage
      //limit currentPage-1*pageCount,pageCount
      // 第一页 0,1,2 limit 0,3
      //第二页  3,4,5 limit 3,3
      //第三页 limit 6,3

      let stuname = req.query.stuname||"";
      let stuid = req.query.stuid||"";
      let grade = req.query.grade||"";
      let sex = req.query.sex||"";

      let currentPage = req.query.currentPage;
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

      //limit currentPage-1*pageCount,pageCount
      sql+= " limit ?,?"
      params.push((currentPage-1)*studentController.pageCount);
      params.push(studentController.pageCount);

     console.log(sql);
     console.log(params);
    dbpool.connect(sql,params,(err,data)=>{
      console.log(data);
      resp.send(data)
    })
  },
    getPageTotal(req,resp){
      let result;
      dbpool.connect("select count(*) as totalcount from t_student",[],(err,data)=>{
        console.log(data);
        //9/3 ->3
        result = Math.ceil(data[0].totalcount/studentController.pageCount)

        console.log(result);
        console.log(typeof result); //number
        //RangeError: Invalid status code: 4 -- 不是一个有效的状态码
        //resp.status=404
        //resp.send(如果第一位是number,指的是http status)
        resp.send(200,result)
        // resp.send(data);
      })
    }
}

module.exports = studentController;