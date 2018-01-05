import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//1.引入组件
import CommentBox from './Components/Comment/CommentBox'

class App extends Component {
  render() {
    let commentarr = [
      {author:'张三',date:'今天', content: '今天天气很好'},
      {author:'李四',date:'昨天', content: '下暴雨了'},
      {author:'王五',date:'3天前', content: '我要吃蛋糕'},
      {author:'赵六',date:'10天前', content: 'Hello World'}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CommentBox data={commentarr}/>
      </div>
    );
  }
}

export default App;
