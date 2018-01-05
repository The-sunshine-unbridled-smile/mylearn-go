// 1.引入React模块
import React from 'react'

import './comment.css'

import CommentList from './CommentList'
import CommentForm from './CommentForm'
// 2.实例化组件的创建
let commentarr = [
  {author:'张三',date:'今天', content: '今天天气很好'},
  {author:'李四',date:'昨天', content: '下暴雨了'},
  {author:'王五',date:'3天前', content: '我要吃蛋糕'},
  {author:'赵六',date:'10天前', content: 'Hello World'},
]
class CommentBox extends React.Component {
  // 结构html
  //JSX
  //定义状态 - 初始化

  //ES5: Foo.prototype.constructor
  constructor(props){
    //初始化this
    super(props)
    this.state={
      data:commentarr
    }
  }

  getNewComment(obj){
    //4. 所有的留言要有一个状态去进行管理
    // React里面的状态State是和用户界面挂钩
    // 合并旧的留言和新的留言传给commentList
    // console.log("Comment Box updated")
    // console.log(obj);
    let currentComment = this.state.data;
    currentComment.push(obj)
    // console.log(currentComment)
    this.setState({
      data: currentComment
    })
  }
  // Props vs State
  /*1. Props 父子组件之间传递数据
   State是管理本组件上的数据
   2. State发生改变会触发render
   * */
  render(){
    console.log("commentBoxRender")
    //template
    //只能有1个根节点
    return (
      <div className="box">
        <h1>CommentBox 评论大Box</h1>
        <CommentList mydata={this.state.data}/>
        <CommentForm onMyUpdate={this.getNewComment.bind(this)}/>
      </div>
    )
  }
}

//导出
export default CommentBox
