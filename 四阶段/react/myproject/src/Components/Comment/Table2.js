import React, {Component} from 'react'
import './Table2.css'
class Table2 extends Component {
    render() {
        return (
            <div>
                <div className="comm2">
                    <span className="mylside">{this.props.mytitle}</span>
                    <input className="myrside2" type="text" placeholder={this.props.money}/>
                </div>
            </div>
        )
    }
}
export default Table2
