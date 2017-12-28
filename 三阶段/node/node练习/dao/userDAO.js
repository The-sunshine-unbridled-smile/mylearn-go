/**
 * Created by uid on 2017/10/28.
 */
//连接数据库
const optPool = require("../config/nodeconfig");
const db = new optPool();
const userModel = {

    //====================登录=========================
    getUser(params){
        console.log("2")
        return new Promise(function(resolve,reject){
            console.log(params)
            db.getPool("select * from t_user where username =? and pwd = ?",params,
                (err,data)=>{
                    if(!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }
                })
        })
    },
};
module.exports = userModel;