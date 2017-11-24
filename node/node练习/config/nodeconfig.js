
const mysql = require("mysql");
 function optPool(){
     //创建连接池
    this.pool = mysql.createPool({
        host:"localhost", //主机地址
        port:"3309",
        user:"root",
        password:"root",
        database:"nodepractice"
    });
//连接方法
     this.getPool=function (sql,arr,fn) {
         this.pool.getConnection((err,conn)=>{
             conn.query(sql,arr,fn);
             conn.release();
         })
     };
}
 module.exports=optPool;
 optPool.pool;
