/**
 * Created by uid on 2017/10/28.
 */
//连接数据库
const optPool = require("../config/studentconfig");
const db = new optPool();
const userModel = {
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
};
module.exports = userModel;