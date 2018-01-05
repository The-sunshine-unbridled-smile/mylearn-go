import React, {Component} from 'react'

class CommentForm extends Component {
  /*把留言加到CommentList步骤
  * 1. 点击提交要触发事件
  *   绑定事件:
  *   事件监听： onClick
  *   事件处理程序: 直接定义在Component里面的方法
  *   绑定: bind(this)
  *
  * 2. 获取到input和textarea的值
  *       - 通过refs属性去获取节点，得到节点后通过value获取值
  * 3.发送给CommentList -> 遍历一下总共有多少条留言
  *     CommentForm --> CommentBox Props down, Events up*/

  addObj(){
    // console.log("add obj触发");
    // console.log(this.refs.author.value)
    // console.log(this.refs.content.value)

    let newComment={
      author: this.refs.author.value,
      date: "刚刚",
      content: this.refs.content.value
    }

  //  触发父组件的Event
    this.props.onMyUpdate(newComment)
  }

  render(){
    return (
      <div>
        <h1>Comment Form 表单</h1>
        <form>
          评论人: <input type="text" ref="author"/>
          <br/>
          内容: <textarea name="" id="" cols="30" rows="10" ref="content"></textarea>
          <br/>
          <button type="button" onClick={this.addObj.bind(this)}>提交</button>
        </form>
      </div>
    )
  }
}

export default CommentForm