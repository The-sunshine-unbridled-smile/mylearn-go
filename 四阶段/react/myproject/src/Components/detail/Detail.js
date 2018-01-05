/**
 * 明细
 * Created by Administrator on 2018/1/3.
 */
import React, {Component} from 'react'
import './Detail.css'
import Header from '../Comment/Header'
import Date from '../Comment/Date'

class Detail extends Component {
    render() {
        return (
            <div>
                <Header myheader="明细"/>
                <div className="detaildate">
                    <Date mydate="12月01日-12月31日"/>
                </div>
                <ul>
                    <li className="odd">
                        <p>当月总收入</p>
                        <span className="blue">25.00元</span>
                    </li>
                    <li className="even"></li>
                    <li className="odd">
                        <p>加班收入</p>
                        <span className="blue">0元</span>
                    </li>
                    <li className="even"></li>
                    <li className="odd">
                        <p>加班时间</p>
                        <span className="blue">0小时</span>
                    </li>
                </ul>
                <div className="date2">
                    <div className="d-lside">
                        <p>27</p>
                        <span>星期三</span>
                    </div>
                    <div className="d-rside">
                        <div className="jisuan">
                            <span>加班 白班 +0.94元</span>
                            <span className="blue">4.5小时</span>
                        </div>
                        <div className="jisuan">
                            <span>请假 带薪休 0元</span>
                            <span className="blue">3.5小时</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail

