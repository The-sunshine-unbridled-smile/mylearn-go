/**
 * Created by Administrator on 2017/12/29.
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './MyNav.css'
class MyNav extends Component{
  render(){
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/Comment">留言页面</NavLink>
            </li>
            <li>
              <NavLink to="/ProductList">产品列表页面</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default MyNav