/**
 * 我的》工资设置
 * Created by uid on 2018/1/3.
 */
import React, {Component} from 'react'
import './Setwage.css'
import Header from '../Comment/Header'
import Table2 from '../Comment/Table2'
import Table3 from '../Comment/Table3'
import {NavLink} from 'react-router-dom'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
class Setwage extends Component {
    render() {
        return (
            <div>
                <Header myheader="工资设置"/>
                <Table2 mytitle="月基本工资（元/月）" money="25.00"/>
                <Table2 mytitle="小时工资（元/小时）" money="0.14"/>
                <p className="setwage-p">
                    提示：小时工资（默认）=基本工资+21.75天+8小时，如与您的实际情况不同，可点击修改
                </p>
                <NavLink to="/oveitime">
                    <Table3 mytitle="设置加班工资"/>
                </NavLink>
            </div>
        )
    }
}
export default Setwage