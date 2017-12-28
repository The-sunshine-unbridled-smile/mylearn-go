/**
 * Created by Administrator on 2017/10/20.
 */
/*1.引入mysql*/
const mysql = require("mysql");
const database = require("../config/dbconfig");
const dbpool = require("../config/dbpoolconfig"); //dbpool

const userModel = require("../dao/userDAO");
const userController = {

  getUser(request,response){
    console.log("controller收到getUser的任务");
    //...业务处理
    //GET请求里面获取form表单的数据
    //请求相关信息都在request对象里
    console.log(request.query.username);  //URL?后面的内容
    console.log(request.query.password);
    //SQL -  select * from t_user where username = username值 and password = password值
    //有结果返回 --> 登录成功
    response.send("任务完成，结束响应")
  },
  postUser(req,resp){
    console.log(req.body.username); //通过bodyParser读取后放到body对象里面
    console.log(req.body.password);
    console.log(req.query); // {}

    let username = req.body.username;
    let password = req.body.password;

    /*1.从dbconfig里面获取db对象*/
    const db = database.dbconfig()

    /*2.发起连接*/
    db.connect();

    /*3.发起sql语句请求
    * 1.SQL语句
    * 2.SQL参数
    * 3.回调函数 -- 执行完sql语句之后调用，把结果注入在回调函数参数里面，作出响应*/

    /* 'or'1'='1  SQL注入  SQL Injection */
    db.query("select * from t_user where u_username = ? and u_password = ?",
      [username,password],
      (err,data)=>{
       // console.log(err.message);  //错误提示
        console.log(data);  //返回[]
        if(data!=undefined){  //判断sql执行是否正确 //if(!err)
          if(data.length>0){  //判断数据是否正确
            resp.redirect("success.html")
          }else{
            resp.send("登录失败");
          }
        }else{
          resp.send("数据库报错"+err.message)
        }
      }
    );
    /*4.结束服务器和数据库之间的连接*/
    db.end()
    // resp.redirect("success.html") //思考: 原生原理是怎么样
  },
  addUser(req,resp){
    //MYSQL
  //1. 创建连接池
    const pool = mysql.createPool({
      host:"localhost", //主机地址
      port:"3306",  //端口默认是3306
      user:"root",
      password:"root",
      database:"demo140a"
    });
    /*2. 通过连接池发起连接
    *
    * 回调函数: 1.连接池连接失败的信息，2.连接池连接成功后的对象*/

    pool.getConnection(function(err,connection){
      /*3.发起query
      *  * 1.SQL语句
       * 2.SQL参数
       * 3.回调函数 -- 执行完sql语句之后调用，把结果注入在回调函数参数里面，作出响应*/
      connection.query("insert into t_user values (?,?)",
        [req.body.username,req.body.password],
        (err,data)=>{
          console.log(data);
          resp.send("注册成功");
        })
      //4.释放本次连接
      connection.release();
    })

  },
  updateUser(){

  },
  addUser2(req,resp){
    //使用封装的dbpoolconfig
    // db.config.database=""
    dbpool.connect("insert into t_user values (?,?)",
      [req.body.username,req.body.password],
      (err,data)=>{
        console.log(data);
        resp.send("注册成功");
      })
  },
  checkUser(req,resp){
    //首先拿到你过来比较的username
    // console.log(req.query.username);
    // let username = req.query.username;
    let username = req.query.username||req.body.username; //前面的返回true,就会用前面的
    // let username = req.query.username&&req.body.username; //前面的返回true,就会用后面的

    // if(req.query.username){
    //   username = req.query.username
    // }else{
    //   username = req.body.username
    // }
    console.log(username);
    dbpool.connect("select * from t_user where u_username = ?",
    [username],
      (err,data)=>{
      if(!err){
        console.log(data.length); //如果查到数据的话，数组长度>0
        if(data.length>0){
          resp.send("用户名已被注册");
        }else{
          resp.send("用户名可以用")
        }
      }else{
        resp.send(err.message);
      }
      })
  },
  getAllUser(req,resp){
    /*select * from t_user where u_username like ?",*/
    let sql = "select * from t_user";
    let param = new Array();
    if(req.query.username){
      sql+=" where u_username like ?"
      let username = "%"+req.query.username+"%";
      param.push(username)
    }

    //3次 insert into t_student values (),(),()
    // let sql = "insert into t_student values"
    // sql+= ""

    // insert into t_student values (),(),()

    dbpool.connect(sql,param,(err,data)=>{
      console.log(data);  //得到的JSON数据
      // console.log(typeof data); //object
      //JSON
      // var a = {"username":"admin"}
      //多于一条
      // var a = [{"username":"admin"},{"username":"abc"}]

      //数据交互。
      resp.send(data);

      // JSON对象格式转化成JSON字符串格式
      // var strdata = JSON.stringify(data)
      // console.log(strdata);
      // console.log(typeof strdata);
      // resp.writeHead(200,{"content-type":"plain/text;charset=utf-8"});
      // resp.write(strdata);
      // resp.end();
    })
  },
  getUserById(req,resp){
    console.log("getUser");
    let userid = req.query.id;
    dbpool.connect("select * from t_user where id = ?",[userid],(err,data)=>{
      console.log(data)
      resp.send(data);
    })
  },
  addUser3(req,resp){
    console.log("UserController处理业务逻辑")
    //交给DAO去把数据添加至数据库

    userModel.addUser([req.body.username,req.body.password],function(result){
      //等DAO结果......
      //处理结果 -> resp对象怎么处理
      console.log("这是controller调用DAO之后的回调函数");
      console.log(result);
      resp.send("注册成功")
    })
    // let result = userModel.addUser([req.body.username,req.body.password])
    // console.log(result);

    console.log("userModel之后打印的console")


  }
}

module.exports = userController