/**
 * Created by uid on 2017/10/28.
 */
//连接数据库
const optPool = require("../config/studentconfig");
const db = new optPool();
const userModel = {

    //====================登录=========================
    getUser(params){
        return new Promise(function(resolve,reject){
            db.getPool("select * from t_login where t_username =? and t_password = ?",params,
                (err,data)=>{
                    if(!err){
                        resolve(data)
                    }else{
                        reject(err)
                    }
                })
        })
    },
    //==========================课程========================
    pageCount:3,
    //显示
    getCourse(params,callback){
        db.getPool("select * from t_course limit ?,?",
            params, (err, data) => {
                callback(data);
            }
        )
    },
    //分页
    getCoursepage(params,callback){
        let result;
        db.getPool("select count(*) as totalcount from t_course",params,(err,data)=>{
            var  pageTotal =  Math.ceil(data[0].totalcount/userModel.pageCount);
           callback(pageTotal);
            //返回的是总页数
        })
    },

    //==========================学生ejs=================
    getStudent(params){
        return new Promise((resolve,reject)=>{
            db.getPool("select * from t_student limit ?,?",params,(err,data)=>{
                resolve(data);
            })
        })
    },
    getTotalCount(){
        return new Promise((resolve,reject)=>{
            db.getPool("select count(*) as totalcount from t_student",[],(err,data)=>{
                resolve(data)
            })
        })
    }
};
module.exports = userModel;