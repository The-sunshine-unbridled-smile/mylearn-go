import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'
class Nav extends Component{
  render(){

    return (
     <nav>
       <ul>
         <li>
           <NavLink to="/Home">首页</NavLink>
         </li>
         <li>
           <NavLink to="/Comment">留言</NavLink>
         </li>
         <li>
           <NavLink to="/Product">产品</NavLink>
         </li>
       </ul>
     </nav>
    )
  }
}

export default Nav