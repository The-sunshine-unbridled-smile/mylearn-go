import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom'

// 引入组件
import CommentBox from './Components/Comment/CommentBox'
import NavTwo from './Components/NavTwo'
import Home from './Components/Home'
import ProductList from './Components/Product/ProductList'
import ShowDetail from './Components/Product/ShowDetail'
class App extends Component {
  render() {

    return (
    <Router>
      <div className="App">
        <h1>Hello 135</h1>
        <NavTwo/>
        <Route path="/Home" component={Home}/>
        <Route path="/Comment" component={CommentBox}/>
        <Route path="/Product" component={ProductList}/>
        <Route path="/ShowDetail/:id" component={ShowDetail}/>
        <Route path="/ShowDetail" component={ShowDetail}/>
        <Redirect to="/Home"/>
      </div>
    </Router>
    );
  }
}

export default App;
