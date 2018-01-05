import React, {Component} from 'react'

import Comment from './Comment'
class CommentList extends Component {
  render (){
    console.log("commentList Render")
    // console.log(this.props.mydata)
    //要循环的数组.map(function(item,index){
    // 访问得到item
    // })
    //ES6 箭头函数
    //this.props.mydata 从CommentBox
    let arr = this.props.mydata.map((item,index)=>{
    //  循环的结构
      return (
        <Comment key={index} author={item.author} date={item.date}>{item.content}</Comment>
      )
    })
    return (
      <div>
        <h1>Comment List 评论列表</h1>
        {arr}
      </div>
    )
  }
}
export default CommentList