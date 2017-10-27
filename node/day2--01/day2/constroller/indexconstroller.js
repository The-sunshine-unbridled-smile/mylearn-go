const mysql = require("mysql");
const optPool = require("../config/studentconfig");
const db = new optPool();
const constroller = {
    getUser(req, res){
        var name = req.query.user;
        var pass = req.query.password;
        console.log('name:' + name);
        console.log('pass:' + pass);
        //登录
        db.getPool("select * from t_login where t_username=? and t_password=?", [name, pass], (err, data) => {
            if (data != undefined) {
                if (data.length > 0) {
                    res.redirect("index.html");
                } else {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },

    //=================================角色部分 增删改查===========================
    //显示到页面
    getRole(req, res){
        db.getPool("select * from t_role", (err, data) => {
            if (data != undefined) {
                if (data.length > 0) {
                    res.send(data);
                } else {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },
    //修改数据
    getxgrole(req, res){
        console.log(req.query);
        var roleNo = req.query.roleNo;
        var roleName = JSON.stringify(req.query.roleName);
        var roleDes = JSON.stringify(req.query.roleDes);
        var roleBz = JSON.stringify(req.query.roleBz);
        //修改
        db.getPool("update t_role set r_no=" + roleNo +
            ",r_name=" + roleName + ",r_des=" + roleDes +
            ",r_bz=" + roleBz + " where r_no=?", roleNo, (err, data) => {
            if (data != undefined) {
                if (err) {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },
    //删除数据
    getscrole(req, res){
        var roleNo = req.query.put;
        console.log(roleNo);
        //删除
        db.getPool("delete from t_role where r_no=?", roleNo, (err, data) => {
            if (data != undefined) {
                if (err) {
                    res.end(err.message)
                }
            } else {
                res.end(err.message);
            }
        });
    },
    //添加数据
    getaddrole(req, res){
        var roleNo = req.query.roleNo;
        var roleName = req.query.roleName;
        var roleDes = req.query.roleDes;
        var roleBz = req.query.roleBz;
        //新增
        db.getPool("insert into t_role values(?,?,?,?)", [null, roleName, roleDes, roleBz], (err, data) => {
            if (data != undefined) {
                if (err) {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },
    //查询数据
    getseachrole(req, res){
        var roleNo = req.query.roleNo;
        var roleName = req.query.roleName;
        //新增
        db.getPool("select * from t_role where r_no=? or r_name=?", [roleNo, roleName], (err, data) => {
            if (data != undefined) {
                if (data.length > 0) {
                    res.send(data);
                } else {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },

    //=================================班级部分 增删改查===================================
    pageCount:3,
    //班级信息显示到页面
    getClass(req, res){
        var currentPage=parseInt(req.query.currentPage);
        db.getPool("select * from t_class limit ?,?",
            [(currentPage-1)*constroller.pageCount,constroller.pageCount],
            (err, data) => {
          res.send(data);
        });
    },
    //新增班级
    getaddClass(req, res){
        var classNo = req.query.classNo;
        var className = req.query.className;
        var classCourseNo = req.query.classCourseNo;
        var classroom = req.query.classroom;
        var startdate = req.query.startdate;
        var createdate = req.query.createdate;
        var classdes = req.query.classdes;
        var classQQ = req.query.classQQ;
        var classBz = req.query.classBz;
        //新增
        db.getPool("insert into t_class values(?,?,?,?,?,?,?,?,?)", [null, className, classCourseNo, classroom, startdate, createdate, classdes, classQQ, classBz], (err, data) => {
            console.log(data)
            if (data != undefined) {
                if (err) {
                    res.end("erro");
                } else {
                    console.log("1")
                }
            } else {
                console.log(err.message)
            }
        });
    },
    //删除班级
    /*  getDeleteClass(req, res){
     var classNo = req.query.putClasss;
     console.log(classNo);
     //删除
     db.getPool("delete from t_class where t_no=?", classNo, (err, data) => {
     if (data != undefined) {
     if (err) {
     res.end(err.message)
     }
     } else {
     res.end(err.message);
     }
     });
     },*/
    //修改班级
    getxgclass(req, res){
        var classNo = req.query.classNo;
        var className = JSON.stringify(req.query.className);
        var classcourseNo = JSON.stringify(req.query.classCourseNo);
        var classRoom = JSON.stringify(req.query.classroom);
        var calssStart = JSON.stringify(req.query.startdate);
        var classCreate = JSON.stringify(req.query.createdate);
        var calssdes = JSON.stringify(req.query.classdes);
        var calssQQ = JSON.stringify(req.query.classQQ);
        var classBz = JSON.stringify(req.query.classBz);
        console.log(classCreate);
        //修改
        db.getPool("update t_class set t_no=" + classNo +
            ",t_name=" + className + ",t_c_no=" + classcourseNo +
            ",t_classroom=" + classRoom +
            ",t_startdate=" + calssStart + ",t_create=" + classCreate +
            ",t_des=" + calssdes + ",t_qq=" + calssQQ + ",t_bz=" + classBz +
            " where t_no=?", classNo, (err, data) => {
            if (data != undefined) {
                if (err) {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },
    //查询班级
    getseachclass(req, res){
        var claNo = req.query.claNo || "";
        var claName = req.query.claName || "";
        let sql = "select * from t_class where 1=1";
        let params = [];
        if (claNo != "") {
            sql += " and t_no = ?";
            params.push(claNo);
        }
        if (claName != "") {
            sql += " and t_name like ?";
            claName = "%" + claName + "%";
            params.push(claName)
        }
        db.getPool(sql, params, (err, data) => {
            res.send(data)
        })
    },

    //分页显示班级数据
    getPageclass(req,res){
        let result;
        db.getPool("select count(*) as totalcount from t_class",[],(err,data)=>{
            result=Math.ceil(data[0].totalcount/constroller.pageCount);
            res.send(200,result);
        })
    },
};
module.exports = constroller;