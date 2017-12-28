const dbpool = require("../config/dbpoolconfig")

const studentModel = {
  getStudent(){
    return new Promise((resolve,reject)=>{
      dbpool.connect("select * from t_student",[],(err,data)=>{
        console.log(data)
        resolve(data)
      })
    })
  }
}

module.exports=studentModel