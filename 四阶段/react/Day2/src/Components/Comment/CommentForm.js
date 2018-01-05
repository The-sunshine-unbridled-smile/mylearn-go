/**
 * Created by Administrator on 2017/12/28.
 */
import React, {Component} from 'react'
/*组件化首字母大写
1.提交触发事件
      绑定事件监听: onClick
      事件处理程序直接定义在Component的方法
      把方法的this绑定在组件上 bind(this)
2.获取input和textarea的值
     通过refs来去定义以及获取节点
     在元素上面定义ref属性
     内部通过this.refs对象获取所有被标记了（具备ref属性的元素）的元素
     获取到的是原生节点
3.发送给CommentList ->遍历一下总共有多少留言
 CommentForm -> Events up 发送给CommentBox
  直接把父组件的事件作为方法触发。通过this.props获取到这个方法，直接调用
 通过CommentBox props down发送给CommentList*/


class CommentForm extends Component{
  addObj(){
    console.log("add obj被触发")
    console.log(this.refs.myauthor.value);
    //创建新对象存值
    let newComment={
      author:this.refs.myauthor.value,
      date:"刚刚",
      content:this.refs.mycontent.value
    }
  //  CommentForm触发CommentBox事件， 子组件触发父组件事件
  //  发送请求给服务器，把数据传给服务器
  //  success: this.props.onMyUpdate()
      this.props.onMyUpdate(newComment);
    this.refs.myauthor.value="";
    this.refs.mycontent.value="";
  }
  render(){
    return (
      <div>
        <h1>Comment Form表单</h1>
        <form>
          评论人: <input type="text" ref="myauthor"/>
          <br/>
          内容:
          <textarea name="" id="" cols="30" rows="10" ref="mycontent"></textarea>
          <br/>
          <button type="button" onClick={this.addObj.bind(this)}>提交留言</button>
        </form>
      </div>
    )
  }
}

export default CommentForm