const dbpool = require("../config/dbpoolconfig");

const studentModel = {
  getStudent(params){
    console.log("DAO getstudent---",params);
    return new Promise((resolve,reject)=>{
      dbpool.connect("select * from t_student limit ?,?",params,(err,data)=>{
        resolve(data)
      })
    })
  },
  getTotalCount(){
    return new Promise((resolve,reject)=>{
      dbpool.connect("select count(*) as totalcount from t_student",[],(err,data)=>{
        resolve(data)
      })
    })
  }
};

module.exports=studentModel;