/**
 * 首页
 * Created by Administrator on 2018/1/3.
 */
import React from 'react'
import './Home.css'
import HomeShow from './HomeShow'
import HomeRecord from './HomeRecord'
import Tableicon from './Tableicon'
import HomeMenu from './HomeMenu'
import JobRecord from '../PopUp/JobRecord'
import LeaveRecord from '../PopUp/LeaveRecord'
import TallyRecord from '../PopUp/TallyRecord'
import {NavLink} from 'react-router-dom'

class Home extends React.Component{
    //记加班方法
    jobRecord(){
        let pop = document.getElementsByClassName("Pop")[0];
        pop.style.display='inline-block';
    }
    jobRecordExit(){
        let pop = document.getElementsByClassName("Pop")[0];
        pop.style.display = 'none';
    }
    //记请假方法
    leaveRecord(){
        let popleave = document.getElementsByClassName('Pop-leave')[0];
        popleave.style.display = 'inline-block'
    }
    leaveRecordExit(){
        let popleave = document.getElementsByClassName('Pop-leave')[0];
        popleave.style.display = 'none'
    }
    //记账方法
    tallyRecord(){
    let poptally = document.getElementsByClassName('Pop-tally')[0];
    poptally.style.display = 'inline-block'
}
    tallyRecordExit(){
        let poptally = document.getElementsByClassName('Pop-tally')[0];
        poptally.style.display = 'none'
    }

    render(){
        console.log("data的数据",this.props.data);
        // let arr = this.props.data.map((item,index)=>{
        //     return(
        //         <HomeShow key={index} title={item.title} content={item.content} money={item.money}/>
        //             )
        //             });
        return(
            <div className="home">
                <div className="home-header">
                    <div className="home-header-nav">
                        <span>考勤周期</span>
                        <span>01.01-01-31</span>
                    </div>
                    <div className="home-header-banner">
                        <h4>当月总收入</h4>
                        <span className="myCount"> 25.00</span>
                        <span>元</span>
                    </div>
                    <div className="home-middle">
                        {/*{arr}*/}
                        <HomeShow title="加班收入" content="0" money="元"/>
                        <HomeShow title="加班时间" content="0" money="小时"/>
                        <HomeShow title="其他" content="0" money="元"/>
                    </div>
                    <div className="home-record">
                        <HomeRecord  mywork={this.jobRecord} myleave={this.leaveRecord} mytally={this.tallyRecord}/>
                    </div>
                    <div className="home-table-icon">
                        <NavLink to="/detail">
                            <Tableicon mytitle="明细" icon="☆"/>
                        </NavLink>
                        <NavLink to="/statistical">
                             <Tableicon mytitle="统计" icon="☆"/>
                        </NavLink>
                    </div>
                    <div className="home-menu-boot">
                        <HomeMenu menutitle="记加班" menuicon="❤"/>
                        <NavLink to="/nickname">
                            <HomeMenu menutitle="我的" menuicon="❤"/>
                        </NavLink>
                    </div>
                </div>
                {/*记加班弹框*/}
                <div className="Pop">
                    <JobRecord icon="d" date="2018-01-03" myexit={this.jobRecordExit}/>
                </div>
                {/*记请假弹框*/}
                <div className="Pop-leave">
                    <LeaveRecord icon="rr" date="2018-01-03" leaveexit={this.leaveRecordExit}/>
                </div>
                {/*记账弹框*/}
                <div className="Pop-tally">
                    <TallyRecord icon="tt" date="2018-01-03" tallyexit = {this.tallyRecordExit}/>
                </div>
            </div>
        )
    }
}
export default Home
