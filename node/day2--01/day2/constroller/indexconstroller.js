/**
 * Created by Mr.袁 on 2017/10/20.
 */
const mysql=require("mysql");
const constroller={
        getUser(req,res){
            var name = req.query.user;
            var pass = req.query.password;
            console.log('name:' + name);
            console.log('pass:' + pass);
             //res.send(name);
            //1.连接数据库
            const db=mysql.createConnection({
                host:"localhost",
                port:"3309",
                user:"root",
                password:"root",
                database:"studentproject"
            });
            //2.发起连接
            db.connect();
            //3.发起请求
            //查询
            db.query("select * from t_login where t_username=? and t_password=?",[name,pass],(err,data)=>{
                if(data!=undefined){
                    if(data.length>0){
                        res.redirect("index.html");
                    }else{
                        res.end("erro");
                    }
                }else{
                    res.end(err.message);
                }
            });


            //4.关闭数据库
            db.end();
        },
        //显示到页面
        getRole(req,res){
            //1.连接数据库
            const db=mysql.createConnection({
                host:"localhost",
                port:"3309",
                user:"root",
                password:"root",
                database:"studentproject"
            });
            //2.发起连接
            db.connect();
            //3.发起请求
            //查询
            db.query("select * from t_role",(err,data)=>{
                if(data!=undefined){
                    if(data.length>0){
                        res.send(data);
                    }else{
                        res.end("erro");
                    }
                }else{
                    res.end(err.message);
                }
            });
            //4.关闭数据库
            db.end();
        },
        //修改数据
        getxgrole(req,res){
            console.log(req.query);
            var roleNo=req.query.roleNo;
            var roleName=JSON.stringify(req.query.roleName);
            var roleDes=JSON.stringify(req.query.roleDes);
            var roleBz=JSON.stringify(req.query.roleBz);
            //1.连接数据库
            const db=mysql.createConnection({
                host:"localhost",
                port:"3309",
                user:"root",
                password:"root",
                database:"studentproject"
            });
            //2.发起连接
            db.connect();
            //3.发起请求
            //修改
            db.query("update t_role set r_no="+roleNo+
                ",r_name="+roleName+",r_des="+roleDes+
                ",r_bz="+roleBz+" where r_no=?", roleNo, (err, data) => {
                if (data != undefined) {
                    if (err) {
                        res.end("erro");
                    }
                } else {
                    res.end(err.message);
                }
            });
            //4.关闭数据库
            db.end();
        },
        //删除数据
        getscrole(req,res){
            var roleNo=req.query.put;
            console.log(roleNo);
            //1.连接数据库
            const db=mysql.createConnection({
                host:"localhost",
                port:"3309",
                user:"root",
                password:"root",
                database:"studentproject"
            });
            //2.发起连接
            db.connect();
            //3.发起请求
            //删除
            db.query("delete from t_role where r_no=?", roleNo, (err, data) => {
                if (data != undefined) {
                    if (err) {
                        res.end(err.message)
                    }
                } else {
                    res.end(err.message);
                }
            });
            //4.结束
            res.end();
        },
        //添加数据
        getaddrole(req,res){
            var roleNo=req.query.roleNo;
            var roleName=req.query.roleName;
            var roleDes=req.query.roleDes;
            var roleBz=req.query.roleBz;
            //1.连接数据库
            console.log(roleNo);
            const db=mysql.createConnection({
                host:"localhost",
                port:"3309",
                user:"root",
                password:"root",
                database:"studentproject"
            });
            //2.发起连接
            db.connect();
            //3.发起请求
            //新增
            db.query("insert into t_role values(?,?,?,?)", [null,roleName,roleDes,roleBz], (err, data) => {
                if (data != undefined) {
                    if (err) {
                        res.end("erro");
                    }
                } else {
                    res.end(err.message);
                }
            });

            //4.关闭数据库
            db.end();
        },
        //查询数据
        getseachrole(req,res){
            var roleNo=req.query.roleNo;
            var roleName=req.query.roleName;
            //1.连接数据库
            console.log(roleNo);
            const db=mysql.createConnection({
                host:"localhost",
                port:"3309",
                user:"root",
                password:"root",
                database:"studentproject"
            });
            //2.发起连接
            db.connect();
            //3.发起请求
            //新增
            db.query("select * from t_role where r_no=? or r_name=?",[roleNo,roleName],(err,data)=>{
                if(data!=undefined){
                    if(data.length>0){
                        res.send(data);
                    }else{
                        res.end("erro");
                    }
                }else{
                    res.end(err.message);
                }
            });

            //4.关闭数据库
            db.end();
        }

};
module.exports=constroller;

