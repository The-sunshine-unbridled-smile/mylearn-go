/**
 * 设置加班工资
 * Created by uid on 2018/1/3.
 */
import React, {Component} from 'react'
import Header from '../Comment/Header'
import Table from '../Comment/Table'
import Table2 from '../Comment/Table2'
import Button from '../Comment/Button'
import './Overtime.css'
class Overtime extends Component {
    cancel(){
        let mycancel=document.getElementsByClassName("addover")[0];
        mycancel.style.display='none';
    }
    add(){
        let mycancel=document.getElementsByClassName("addover")[0];
        mycancel.style.display='block';
    }
    render() {
        return (
            <div>
                <Header myheader="加班工资"/>
                <Table mytitle="工作日 倍数*1.5" money="0.21"/>
                <Table mytitle="周末 倍数*2.0" money="0.28"/>
                <Table mytitle="节假日 倍数*3.0" money="0.42"/>
                <div  onClick={this.add}>
                    <Button mybtn="添加"/>
                </div>
                <div className="addover">
                    <div>
                        <Header myheader="添加加班类型"/>
                        <Table2 mytitle="名称"/>
                        <Table2 mytitle="工资倍数（倍）" money="0"/>
                        <Table2 mytitle="每小时工资（元/小时）" money="0"/>
                        <div className="mybtn">
                            <div onClick={this.cancel}>取消</div>
                            <div>确认</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Overtime