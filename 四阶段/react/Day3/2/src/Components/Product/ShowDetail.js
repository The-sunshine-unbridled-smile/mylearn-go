import React, {Component} from 'react'
import $ from 'jquery'
/*
* http://www.cnblogs.com/hsprout/p/5504053.html
* http://www.jianshu.com/p/20dee31b5349
* */
class ShowDetail extends Component{
  componentWillMount(){

    // console.log(this.props.match.params.id)
    // console.log($.ajax);
    //fetch请求服务器
    //把id发送给服务器，
  /*  fetch("服务器地址?",{
      method:"GET",
      body:JSON.stringify({id:this.props.match.params.id})
    }).then(function(resp){
      return resp.json()
    }).then(function(data){
      //setState
      //data就是查询到数据
    })*/
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>详情页面</h1>
        <h3>产品ID: {this.props.location.query.id} </h3>
        <h3>产品名称：{this.props.location.query.name} </h3>
      </div>
    )
  }
}
export default ShowDetail