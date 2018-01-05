import React,{Component} from 'react'
import './Table3.css'
class Table3 extends Component{
    render(){
        return(
            <div>
                <div className="comm3">
                    <span className="mylside">{this.props.mytitle}</span>
                    <span className="myrside">
                       <span>&gt;</span>
                   </span>
                </div>
            </div>
        )
    }
}
export default Table3
