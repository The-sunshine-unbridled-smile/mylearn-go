
import React,{Component} from 'react'
import './Date.css'
class Date extends Component{
    render(){
        return(
            <div>
                <div className="com">
                    <span className="icon">&lt;</span>
                    <span className="mydate">{this.props.mydate}</span>
                    <span className="icon">&gt;</span>
                </div>
            </div>
        )
    }
}
export default Date
