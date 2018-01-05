/**
 * 底部菜单组件
 * Created by Administrator on 2018/1/3.
 */
import React from 'react'
import './HomeMenu.css'
class HomeMenu extends React.Component{
    render(){
        return(
            <div className="home-menu">
                <div className="home-menu-list">
                    <div className="home-menu-icon">
                        {this.props.menuicon}
                    </div>
                    <div className="home-menu-title">
                        <span>{this.props.menutitle}</span>
                    </div>
                </div>

            </div>
        )
    }
}
export default HomeMenu