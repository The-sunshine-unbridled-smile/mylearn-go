import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// BrowserRouter as Router, Route配置
import {BrowserRouter as Router,Route} from 'react-router-dom'
//1.引入组件
import CommentBox from './Components/Comment/CommentBox'
import ProductList from './Components/Product/ProductList'
import Detail from './Components/Product/Detail'
import MyNav from './Components/MyNav'
class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <h1>APP页面</h1>
          <MyNav/>
            <Route path="/Comment" component={CommentBox}/>
            <Route path="/ProductList" component={ProductList}/>
            <Route path="/Detail" component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
