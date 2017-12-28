/*
* const db = mysql.createConnection({
 host:"localhost", //主机地址
 port:"3306",  //端口默认是3306
 user:"root",
 password:"root",
 database:"demo140a"
 });
 */

 const mysql = require("mysql");

 module.exports.dbconfig = function(){
   const db = mysql.createConnection({
     host:"localhost", //主机地址
     port:"3306",  //端口默认是3306
     user:"root",
     password:"root",
     database:"demo140a"
   });
   return db;
 }