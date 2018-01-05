import React, {Component} from 'react'
import './Tableicon.css'
class Tableicon extends Component {
    render() {
        return (
            <div>
                <div className="comm">
                    <span className="mylside">
                        <span className="icon">
                            {this.props.icon}
                        </span>
                        {this.props.mytitle}
                        </span>
                    <span className="myrside">
                       <span>&gt;</span>
                   </span>
                </div>
            </div>
        )
    }
}
export default Tableicon
