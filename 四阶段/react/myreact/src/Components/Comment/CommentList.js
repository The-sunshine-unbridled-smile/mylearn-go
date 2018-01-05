/**
 * Created by uid on 2017/12/29.
 */
import React,{Component} from 'react'

import './comment.css'  //引入css
import Comment from './Comment'

class CommentList extends Component{
    render(){
        console.log(this.props.data2);
        //得到一个循环好的结构
        let arr=this.props.data2.map((item,index)=>{
            return(
                <Comment author={item.author} date={item.date} key={index}>{item.content}</Comment>
            )
        });
        return(
            <div className="commentList">
                <h1>list评论列表</h1>
                {arr}
            </div>
        )
    }
}
export default CommentList