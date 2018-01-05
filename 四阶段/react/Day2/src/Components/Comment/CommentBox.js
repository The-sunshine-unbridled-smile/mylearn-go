/**
 * Created by Administrator on 2017/12/27.
 */
import React from 'react'
//引入组件
import CommentList from './CommentList'
import CommentForm from './CommentForm'

import './comment.css'
//创建一个对象继承React.Component

//props和state的区别
/*1.props
* 父子组件之间的数据传递
* 2.State
* 管理当前本组件上面的数据
* 当state发生变化的时候，会重新触发render*/
class CommentBox extends React.Component{
  //定义状态 state
  //通过constructor定义属性
  constructor(props){
    super(props)
    this.state={
      commentData: this.props.data
    }
  }
  getNewComment(comm){
    console.log("CommentBox收到更新通知")
    console.log(comm);
    let currentComment = this.state.commentData;
    currentComment.push(comm);
    //发请求给服务器去获取最新的留言
    // 赋值给state
    //重新赋值 - setState() ==> 触发render
    this.setState({
      commentData: currentComment
    })
  }
//  写上HTML结构 - JSX
//  render方法 结构写出来
  render(){
  //  return (<template> - 只能有一个根元素)
    console.log(this.state.commentData);
    return (
      <div>
        <h1>CommentBox评论盒子</h1>
        <CommentList data2={this.state.commentData}/>
        <CommentForm onMyUpdate={this.getNewComment.bind(this)}/>
      </div>
    )
  }
}

//导出
export default CommentBox