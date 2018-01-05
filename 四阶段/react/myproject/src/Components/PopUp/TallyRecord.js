/**
 * 记账弹框
 * Created by Administrator on 2018/1/4.
 */
import React from 'react'
import './JobRecord.css'
import Table from './Table'
class TallyRecord extends React.Component{
    tallyExit(){
        this.props.tallyexit()
    }
    render() {
        return (
            <div className="job-record">
                <div className="job-record-menu">
                    <div className="job-record-menu-left">
                        <span>{this.props.icon}</span>
                        <span>{this.props.date}</span>
                    </div>
                    <div className="job-record-list">
                        <table border="1" cellPadding={0} cellSpacing={0}>
                            <tr>
                                <td rowSpan="2">s</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">w</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>X</td>
                                <td>0</td>
                                <td>.</td>
                            </tr>
                        </table>
                    </div>
                    <div className="job-record-lei">
                        <Table mytitle="记账类型" money="0.21"/>
                    </div>
                </div>
                <div className="job-record-footer">
                    {/*<HomeMenu menutitle="取消" onclick={this.ExitRecord.bind(this)}/>*/}
                    {/*<HomeMenu menutitle="加班收入"/>*/}
                    <div className="home-menu-list">
                        <div className="home-menu-title">
                            <span onClick={this.tallyExit.bind(this)}>取消</span>
                            <span>确定</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default TallyRecord