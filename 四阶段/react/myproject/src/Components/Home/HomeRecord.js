/**
 * 记加班，记请假，记账首页菜单
 * Created by Administrator on 2018/1/3.
 */
import React from 'react'
import './HomeRecord.css'
class HomeRecord extends React.Component{
    addwork(){
        console.log(this);
        this.props.mywork();
    }
    addleave(){
        this.props.myleave();
    }
    addtally(){
        this.props.mytally();
    }
    render(){
        return(
            <div className="home-record-box">
                    <div className="home-record-list">
                        <div className="home-record-list-icon">

                        </div>
                        <div className="home-record-list-title">
                            <span onClick={this.addwork.bind(this)}>记加班</span>
                        </div>
                    </div>
                    <div className="home-record-list">
                        <div className="home-record-list-icon">

                        </div>
                        <div className="home-record-list-title">
                            <span onClick={this.addleave.bind(this)}>记请假</span>
                        </div>
                    </div>
                    <div className="home-record-list">
                        <div className="home-record-list-icon">

                        </div>
                        <div className="home-record-list-title">
                            <span onClick={this.addtally.bind(this)}>记账</span>
                        </div>
                    </div>
            </div>
        )
    }
}
export default HomeRecord