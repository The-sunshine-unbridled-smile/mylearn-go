/**
 * Created by Administrator on 2017/12/27.
 */
import React,{Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
  render(){
    console.log(this.props.data2);
    //JS 循环- 得到一个循环好的结构
    let arr = this.props.data2.map((item,index)=>{
      return (
        <Comment key={index} author={item.author} date={item.date}>{item.content}</Comment>
      )
    })
    return (
      <div className="commentList">
        <h1>Comment List 评论列表</h1>
        {arr}
      </div>
    )
  }
}

export default CommentList