var msgFactory = function(type,value){
  // var msgobj = new msgFactory()
  console.log(this);
  // if(type=="email"){
  //   return new this.email(value)
  // }else if(type=="phone"){
  //   return new this.phone(value)
  // }
  if(this instanceof msgFactory){
    console.log("this现在是实例化对象")
    return new this[type](value)
  }else{
    console.log("this是..",this)
    return new msgFactory(type,value);
  }

}
/** 1. 邮箱： (^w+[-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$
 * 2. 手机： /0?(13|14|15|18)[0-9]{9}/
 * 3. 身份证： ^d{15}|d{}18$
 */
msgFactory.prototype={
  email:function(value){
    console.log("email")
    if(/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(value)){
      this.result=true
    }else{
      this.result="邮箱格式不对，请重新输入"
    }
  },
  phone:function(value){
    // console.log(this);
    if(/0?(13|14|15|18)[0-9]{9}/.test(value)){
      this.result=true
    }else{
      this.result="手机格式不对，请重新输入"
    }
  }
}

msgFactory.prototype.Email=function(value){

}
msgFactory.prototype.Phone=function(value){

}


