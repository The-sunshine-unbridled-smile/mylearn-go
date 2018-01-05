/**
 * Created by Administrator on 2018/1/3.
 * 记加班
 */
import React from 'react'
import Table from './Table'
// import HomeMenu from '../Home/HomeMenu'
import './JobRecord.css'

class JobRecord extends React.Component{
    ExitRecord(){
        this.props.myexit();
    }
    render(){
        return(
            <div className="job-record">
                <div className="job-record-menu">
                    <div className="job-record-menu-left">
                        <span>{this.props.icon}</span>
                        <span>{this.props.date}</span>
                    </div>
                    <div className="job-record-list">
                        <table border="1" cellPadding={0} cellSpacing={0}>
                            <tr>
                                <td>0.0</td>
                                <td>1.0</td>
                                <td>2.0</td>
                                <td>3.0</td>
                                <td>4.0</td>
                                <td>5.0</td>
                            </tr>
                            <tr>
                                <td>0.5</td>
                                <td>1.5</td>
                                <td>2.5</td>
                                <td>3.5</td>
                                <td>4.5</td>
                                <td>5.63</td>
                            </tr>
                            <tr>
                                <td>6.0</td>
                                <td>7.</td>
                                <td>8.0</td>
                                <td>9.0</td>
                                <td>10.0</td>
                                <td>11.0</td>
                            </tr>
                        </table>
                    </div>
                    <div className="job-record-lei">
                        <Table mytitle="加班工资" money="0.21"/>
                        <Table mytitle="班别" money="白班"/>
                    </div>
                </div>
                <div className="job-record-footer">
                    {/*<HomeMenu menutitle="取消" onclick={this.ExitRecord.bind(this)}/>*/}
                    {/*<HomeMenu menutitle="加班收入"/>*/}
                    <div className="home-menu-list">
                        <div className="home-menu-title">
                            <span onClick={this.ExitRecord.bind(this)}>取消</span>
                            <span>我的收入</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default JobRecord