const mysql = require("mysql");
const optPool = require("../config/nodeconfig");
const db = new optPool();
const userModel=require("../dao/userDAO");  //引入DAO层
const constroller = {
    getUser(req, res){
        var name = req.body.username;
        var pass = req.body.password;
        userModel.getUser([name, pass]).then(
            (data) => {
                if (data.length > 0) {
                    req.session.username = data[0].username;
                    res.redirect("/index");
                } else {
                    res.send("登录失败");
                }
            }
        );
    },
    getUsername(req, res){
        res.send(req.session.username)
    },

};
module.exports = constroller;