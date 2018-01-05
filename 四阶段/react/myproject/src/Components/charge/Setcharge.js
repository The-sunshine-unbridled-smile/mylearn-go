/**
 * 我的
 * Created by uid on 2018/1/3.
 */
import React, {Component} from 'react'
import Header from '../Comment/Header'
import Table3 from '../Comment/Table3'
import Table2 from '../Comment/Table2'
import Button from '../Comment/Button'
import './Setcharge.css'
class Setcharge extends Component {
    addcharge() {
        let mycancel = document.getElementsByClassName("addcharge")[0];
        mycancel.style.display = 'block';
    }
    addbonus(){
        let mycancel = document.getElementsByClassName("addbonus")[0];
        mycancel.style.display = 'block';
    }
    addpart(){
        let mycancel = document.getElementsByClassName("addpart")[0];
        mycancel.style.display = 'block';
    }
    addborrow(){
        let mycancel = document.getElementsByClassName("addborrow")[0];
        mycancel.style.display = 'block';
    }

    cancelcharge() {
        let mycancel = document.getElementsByClassName("addcharge")[0];
        mycancel.style.display = 'none';
    }
    cancelbonus(){
        let mycancel = document.getElementsByClassName("addbonus")[0];
        mycancel.style.display = 'none';
    }
    cancelpart(){
        let mycancel = document.getElementsByClassName("addpart")[0];
        mycancel.style.display = 'none';
    }
    cancelborrow(){
        let mycancel = document.getElementsByClassName("addborrow")[0];
        mycancel.style.display = 'none';
    }


    render() {
        return (
            <div>
                <Header myheader="记账设置"/>
                <div onClick={this.addbonus}>
                    <Table3 mytitle="奖金"/>
                </div>
                <div onClick={this.addpart}>
                    <Table3 mytitle="兼职"/>
                </div>
                <div onClick={this.addborrow}>
                    <Table3 mytitle="借钱"/>
                </div>

                <div onClick={this.addcharge}>
                    <Button mybtn="添加"/>
                </div>
                <div className="addbonus">
                    <div>
                        <Header myheader="奖金"/>
                        <Table2 mytitle="名称" money="奖金"/>
                        <div className="mybtn">
                            <div onClick={this.cancelbonus}>取消</div>
                            <div>确认</div>
                        </div>
                    </div>
                </div>
                <div className="addpart">
                    <div>
                        <Header myheader="兼职"/>
                        <Table2 mytitle="名称" money="兼职"/>
                        <div className="mybtn">
                            <div onClick={this.cancelpart}>取消</div>
                            <div>确认</div>
                        </div>
                    </div>
                </div>
                <div className="addborrow">
                    <div>
                        <Header myheader="借钱"/>
                        <Table2 mytitle="名称" money="借钱"/>
                        <div className="mybtn">
                            <div onClick={this.cancelborrow}>取消</div>
                            <div>确认</div>
                        </div>
                    </div>
                </div>
                <div className="addcharge">
                    <div>
                        <Header myheader="添加加班类型"/>
                        <Table2 mytitle="名称" money="请输入名称"/>
                        <div className="mybtn">
                            <div onClick={this.cancelcharge}>取消</div>
                            <div>确认</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Setcharge