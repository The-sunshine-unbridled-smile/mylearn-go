/**
 * Created by uid on 2018/1/3.
 */
import React,{Component} from 'react'
import Header from '../Comment/Header'
import Table from '../Comment/Table'
import Table2 from '../Comment/Table2'
import Button from '../Comment/Button'
import './setLeave.css'
class setLeave extends Component{
    addleave(){
        let mycancel=document.getElementsByClassName("addleave")[0];
        mycancel.style.display='block';
    }
    canceleave(){
        let mycancel=document.getElementsByClassName("addleave")[0];
        mycancel.style.display='none';
    }
    render(){
        return(
            <div>
                <Header myheader="请假设置"/>
                <Table mytitle="带薪休假" money="0"/>
                <Table mytitle="调休" money="0"/>
                <Table mytitle="事假" money="-0.14"/>
                <Table mytitle="病假" money="-0.07"/>
                <div onClick={this.addleave}>
                    <Button mybtn="添加"/>
                </div>

                <div className="addleave">
                    <div>
                        <Header myheader="添加请假类型"/>
                        <Table2 mytitle="名称" money="请输入名称"/>
                        <Table2 mytitle="工资倍数（倍）" money="0"/>
                        <Table2 mytitle="每小时扣款（元/小时）" money="0"/>
                        <div className="mybtn">
                            <div onClick={this.canceleave}>取消</div>
                            <div>确认</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default setLeave