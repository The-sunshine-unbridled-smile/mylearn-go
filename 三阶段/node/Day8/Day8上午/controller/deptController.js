const dbpool = require("../config/dbpoolconfig")
module.exports.getDept=function(req,resp){
  dbpool.connect("")
}
// module.exports.getDept = function(req,resp){
//   dbpool.connect("select * from t_dept",[],function(err,data){
//     console.log(data1)
//     let staffid = data1[0].d_incharge.split(",");
//     let staffname = [];
//     for(let i=0;i<staffid.length;i++){
//       dbpool.connect("select s_name from t_staff where s_id = ?",[parseInt(staffid[i])],function(err,data){
//         console.log(data)
//         staffname.push(data[0].s_name);
//         console.log(staffname);
//         data1[0].staffname = staffname.join()
//         console.log(data1);
//       })
//     }
//     resp.send(data1)
//   })
//   // function1().dbpool().function2()
//   //每次执行完异步操作，返回一个新的promise对象
//   //Promise：pending进行中, fulfilled 成功, rejected 失败
//
// }