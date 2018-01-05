/**
 * Created by uid on 2018/1/3.
 */
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

class MyNav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/Comment">留言页面</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default MyNav