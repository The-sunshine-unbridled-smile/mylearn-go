//1.连接数据库
const dbpool = require("../config/dbpoolconfig");

const userModel = {
  addUser(params,callback){
    // let result="初始化result";
   //dbpool.connect
    //SQL
    //SQL参数*controller传进来
    //回调函数:得到sql执行结果 -》告诉调用userModel.addUser的调用者
    dbpool.connect("insert into t_user values (NULL,?,?)",
    params,(err,data)=>{
        console.log("userDAO查询完毕");
        console.log(data);
        // console.log(callback)
        callback(data)
        //要告诉controller
        // result = data;
      })
    console.log("addUser执行完毕")

    // return result;
  }
}

module.exports=userModel