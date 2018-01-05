import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home/Home'
import SetLeave from './Components/leave/setLeave'   //请假设置
import Overtime from './Components/oveitime/Overtime'   //加班工资
import Setwage from './Components/wage/Setwage'   //工资设置
import Setcharge from './Components/charge/Setcharge'   //记账设置
import Setnickname from './Components/nickname/Setnickname'   //点此设置昵称
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Detail from './Components/detail/Detail'
import Statistical from './Components/statistical/Statistical'
import Nickname from './Components/nickname/Setnickname'

class App extends Component {
    render() {
        let showArr = [
            {title: "加班收入", content: "0", money: "元"},
            {title: "加班时间", content: "0", money: "小时"},
            {title: "其他收入", content: "0", money: "元"},
        ];
        return (

            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/wage" component={Setwage}/>
                        <Route path="/leave" component={SetLeave}/>
                        <Route path="/charge" component={Setcharge}/>
                        <Route path="/oveitime" component={Overtime}/>
                        <Route path="/detail" component={Detail}/>
                        <Route path="/statistical" component={Statistical}/>
                        <Route path="/nickname" component={Nickname}/>
                    </Switch>
                </div>
                {/*<div className="App">*/}
                {/*<Home data={showArr}/>*/}
                {/*</div>*/}
            </Router>
        );
    }
}

export default App;
