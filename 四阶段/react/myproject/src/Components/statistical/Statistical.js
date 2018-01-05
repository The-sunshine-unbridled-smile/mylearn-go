/**
 * 统计
 * Created by Administrator on 2018/1/3.
 */
import React,{Component} from 'react'
import './Statistical.css'
import Header from '../Comment/Header'
import Date from '../Comment/Date'
import Table2 from '../Comment/Table2'
class Statistical extends Component{
    render(){
        return(
            <div>
                <Header myheader="统计"/>
                <div className="date">
                    <Date mydate="12月01日-12月31日"/>
                </div>
                <div className="income">
                <Table2 mytitle="收入" money="25.00元"/>
            </div>
                <div className="calculate">
                    <Table2 mytitle="基本工资" money="25.00元"/>
                    <Table2 mytitle="加班工资" money="0元"/>
                    <Table2 mytitle="记账收入" money="0元"/>
                </div>
                <div className="spending">
                    <Table2 mytitle="支出" money="0元"/>
                </div>
                <div className="calculate">
                    <Table2 mytitle="请假扣款" money="00元"/>
                    <Table2 mytitle="加班工资" money="0元"/>
                </div>
            </div>
        )
    }
}
export default Statistical

