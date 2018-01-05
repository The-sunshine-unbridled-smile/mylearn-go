import React,{Component} from 'react'
import './Table.css'
class Table extends Component{
    render(){
        return(
            <div>
               <div className="comm">
                   <span className="mylside">{this.props.mytitle}</span>
                   <span className="myrside">
                       <span>{this.props.money}元/小时</span>
                       <span>&gt;</span>
                   </span>
               </div>
            </div>
        )
    }
}
export default Table
