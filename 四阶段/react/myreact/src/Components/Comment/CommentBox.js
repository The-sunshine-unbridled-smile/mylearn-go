/**
 * Created by uid on 2017/12/29.
 */
import React from 'react'

import CommemtList from './CommentList'
import CommemtForm from './CommentForm'


//创建一个对象继承React.Component
//CommentBox:是该js文件的名字
class CommentBox extends React.Component {
    //定义状态state
    //通过constructor定义属性
    constructor(props){
        super(props);  //调用super方法,this.props
        this.state={
            commentData:this.props.data
        }

    }
    getNewComment(comm){
        //comm拿到子组件传过来的值
        console.log("commentbox收到");
        console.log(comm);
        //将拿到的comm加到state里面去
        let currentComment=this.state.commentData;
        currentComment.push(comm);
        //发请求给数据库去获取最新的留言
        //重新赋值---触发render
        this.setState({
            commentData:currentComment
        })
    }

    render() {
//return里面只能有一个根元素
        console.log(this.props.data);
        return (
            <div>
                <h1>commentBox评论盒子</h1>
                {/*<CommemtList data2={this.props.data}/>*/}
                <CommemtList data2={this.state.commentData}/>
                <CommemtForm onMyUpdate={this.getNewComment.bind(this)}/>
            </div>
        )
    }
}
//导出
export default CommentBox