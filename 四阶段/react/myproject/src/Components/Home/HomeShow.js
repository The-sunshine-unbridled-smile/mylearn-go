/**
 * 首页加班收入显示
 * Created by Administrator on 2018/1/3.
 */
import React from 'react'
import './HomeShow.css'
class HomeShow extends React.Component{
    render(){
        return(
            <div className="home-show">
                <div className="home-show-title">
                    <i>○</i>
                    <span>{this.props.title}</span>
                </div>
                <br/>
                <div className="home-show-boot">
                    <div className="home-show-content">
                        <span className="home-show-content-num">{this.props.content}</span>
                        <span className="home-show-money">{this.props.money}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeShow