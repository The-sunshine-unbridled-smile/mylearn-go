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
    //显示到页面
    getClass(req, res){
        db.getPool("select * from t_class", (err, data) => {
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
    //新增数据
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
        db.getPool("insert into t_class values(?,?,?,?,?,?,?,?,?)",
            [null, className, classCourseNo, classroom,startdate,createdate,classdes,classQQ,classBz],
            (err, data) => {
            if (data != undefined) {
                if (err) {
                    res.end("erro");
                }
            } else {
                res.end(err.message);
            }
        });
    },
    //删除班级
    getDeleteClass(req, res){
        var classNo = req.query.put;
        console.log(classNo);
        //删除
        db.getPool("delete from t_class where r_no=?", classNo, (err, data) => {
            if (data != undefined) {
                if (err) {
                    res.end(err.message)
                }
            } else {
                res.end(err.message);
            }
        });
    },
};



module.exports = constroller;