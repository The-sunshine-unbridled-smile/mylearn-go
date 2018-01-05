/**
 * Created by uid on 2018/1/3.
 */
import React,{Component} from 'react'
import './Button.css'
class Button extends Component{
    render(){
        return(
            <div className="button-div">
                <button>{this.props.mybtn}</button>
            </div>
        )
    }
}
export default Button