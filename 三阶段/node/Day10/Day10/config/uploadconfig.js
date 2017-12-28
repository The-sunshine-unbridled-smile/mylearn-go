/**
 * Created by Administrator on 2017/10/30.
 */

const multer = require("multer");
//文件上传位置的配置
const storage = multer.diskStorage({
  //保存路径
  destination: function(req,file,cb) {
    console.log(file);
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    // cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    cb(null,file.originalname)+
  }

})

const upload = multer({
  storage:storage
})

module.exports = upload