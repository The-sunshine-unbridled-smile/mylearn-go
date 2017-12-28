const AV = require('leancloud-storage');
const nodemailer = require('nodemailer');


const APP_ID = 'W2vxVsNd7Nyj7y18dp8v4Syh-gzGzoHsz';
const APP_KEY = '91fUwVvu18dPFlS7nVgO4oMj';
//模块进行初始化
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

const smsController ={
  sendCode(req,resp){
    console.log(req.body.phone)
    AV.Cloud.requestSmsCode({
      mobilePhoneNumber: req.body.phone,
      name: 'NANA 140A',
      op: '登录DEMO',
      ttl: 10                     // 验证码有效时间为 10 分钟
    }).then(function(){
      //调用成功
      resp.send("验证码发送成功")
    }, function(err){
      //调用失败
      resp.send("验证码发送失败，请检查手机号")
    });
  },
  verifyCode(req,resp){
    AV.Cloud.verifySmsCode(req.body.code, req.body.phone).then(function(){
      //验证成功
      resp.send("验证成功")
    }, function(err){
      //验证失败
      resp.send(err)
    });
  },
  sendMail(req,resp){
// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 587,
      secure: false, // true for 465, false for other ports //465-SSL
      auth: {   //账号信息
        user: "2597661010@qq.com", // generated ethereal user
        pass: "mnyguvlnhfxudiha"  // generated ethereal password
      }
    });

    // setup email data with unicode symbols 发送邮件的内容配置
    let mailOptions = {
      from: '"百杰140A" <2597661010@qq.com>', // sender address //发送人
      to: req.body.receiver, // list of receivers //收件人
      subject: 'Hello World', // Subject line //邮件标题
      html: "<div>" +
      "<h1>Hello!!!!请看以下内容</h1>" +
      req.body.mailContent +
      "</div>", // html body
      attachments:[{
        filename:"cat1.jpg",
        path:"./public/images/cat1.jpg" //相对于服务器根地址
      }]
    };

    // send mail with defined transport object 执行发送邮件
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        resp.send(error)
      }else{
        resp.send(info)
      }
    });
  }
};

module.exports=smsController;