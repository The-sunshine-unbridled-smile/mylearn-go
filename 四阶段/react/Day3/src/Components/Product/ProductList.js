/**
 * Created by Administrator on 2017/12/29.
 */
import React, {Component} from 'react'
import "whatwg-fetch"
import {Link} from 'react-router-dom'
class ProductList extends Component{
  constructor(){
    super()
    this.state={
      product:[]
    }
  }
  componentWillMount(){
    //axios //ajax
    //fetch
    fetch("product.json").then(resp=>{
      console.log(resp)
      return resp.json()
    }).then(data=>{
      console.log(data) //json数据
      this.setState({
        product:data
      })
    })
  }
  render(){
    let productArr = this.state.product.map((item,index)=>{
      return(
        <div key={index}>
          <Link to="/Detail">
            <h1>产品名称: {item.productname}</h1>
            <img src={item.imgsrc} alt=""/>
          </Link>
        </div>
      )
    })
    return(
      <div>
        <h1>商品列表页面</h1>
        {productArr}
      </div>
    )
  }
}

export default ProductList