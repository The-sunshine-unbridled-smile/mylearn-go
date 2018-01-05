/**
 * Created by uid on 2018/1/2.
 */
import React,{Component} from 'react'


/*
1：提交触发事件
   绑定事件监听：onclick
   事件处理程序直接定义在component的方法
   把方法的this绑定在组件上bind(this)
2:获取input 和texyarea的值
      通过refs来定义以及获取节点
      在元素上面定义ref属性
      内部通过this.refs对象获取所有标记了具有refs属性的元素
      获取得到的是原生节点
3:发送给commentlist--遍历一下有多少留言
        直接把父组件的事件作为方法触发，通过this.props获取到这个方法，直接调用
*/

class CommentForm extends Component{
    addObj(){
        console.log("11111");
        console.log(this.refs.myauthor.value);
        //创建新对象存值
        let newComment={
            author:this.refs.myauthor.value,
            date:"刚刚",
            content:this.refs.mycontent.value
        };
        //触发commentbox事件 子组件触发父组件的事件
        this.props.onMyUpdate(newComment);
        //提交评论后让输入框为空
        this.refs.myauthor.value="";
        this.refs.mycontent.value="";
    }
    render(){
        return(
           <div>
               <h1>comment form</h1>
               <form>
                   评论人：<input type="text" ref='myauthor'/>
                   <br/>
                   内容：
                   <textarea name="" id="" cols="30" rows="10" ref='mycontent'></textarea>
                   <br/>
                   <button type="button" onClick={this.addObj.bind(this)}>提交留言</button>
               </form>
           </div>
        )
    }
}
export default CommentForm