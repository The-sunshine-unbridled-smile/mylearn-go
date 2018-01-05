/**
 * 我的
 * Created by Administrator on 2018/1/3.
 */
import React, {Component} from 'react'
import Tableicon from '../Comment/Tableicon'
import './Setnickname.css'
import {NavLink} from 'react-router-dom'
class Setnickname extends Component {
    render() {
        return (
            <div>
                <div className="myhead">
                         <img src='../img/home-beijing.png' alt="" />
                    <p>点此设置昵称</p>
                </div>
                <NavLink to="/wage">
                    <Tableicon mytitle="工资设置" icon="图标1"/>
                </NavLink>
                <NavLink to="/leave">
                    <Tableicon mytitle="请假扣款" icon="图标2"/>
                </NavLink>
                <NavLink to="/charge">
                    <Tableicon mytitle="记账设置" icon="图标3"/>
                </NavLink>
            </div>
        )
    }
}
export default Setnickname
