import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Nav extends Component{
  render(){
    //判断路径为/Home
    //第一个li className="active"
    // console.log(window.location.pathname)
    let homeClass = window.location.pathname=="/Home"?"active":""
    let commentClass = window.location.pathname=="/Comment"?"active":""

    return (
      <ul className="nav nav-tabs">
        <li role="presentation" className={homeClass}>
          <Link to="/Home">首页</Link>
        </li>
        <li role="presentation" className={commentClass}>
          <Link to="/Comment">留言</Link>
        </li>
      </ul>
    )
  }
}

export default Nav