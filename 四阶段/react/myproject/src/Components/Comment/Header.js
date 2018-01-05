/**
 * Created by uid on 2018/1/3.
 */
import React,{Component} from 'react'
import './Header.css'
class Header extends Component{
    render(){
        return(
            <div>
                <header className="header-div">
                     <span className="prev">&lt;</span>
                    <span>{this.props.myheader}</span>
                </header>
            </div>
        )
    }
}
export default Header