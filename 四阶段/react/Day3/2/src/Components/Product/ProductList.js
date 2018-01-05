import React,{Component} from 'react'
import 'whatwg-fetch'
import {Link} from 'react-router-dom'
class ProductList extends Component{
  constructor(){
    super()
    this.state={
      product:[]
    }
  }
  componentWillMount(){
    //发送请求获取JSON
    //把数据存在state

    var that = this;
    fetch('product.json').then(function(resp){
      console.log(resp)
      //把流转化成JSON
      return resp.json()
    }).then(function(data){
      console.log(data)
      console.log(that)
      that.setState({
        product: data
      })
    })
  }
  render(){
    //遍历State,输出遍历后的布局结构

    let productArr = this.state.product.map((item,index)=>{
      return(
        <div key={index}>
          <Link to={{
            pathname:"/ShowDetail",
            query: {id:item.id,name:item.productname}
          }}>
            <h1>产品名称: {item.productname}</h1>
            <img src={item.imgsrc} alt=""/>
          </Link>
        </div>
      )
    })
    return(
      <div>
        <h1>产品列表页面</h1>
        {productArr}
      </div>
    )
  }
}

/*参数传递方法：
* 1. 地址拼接
* <Link to={"/ShowDetail/"+item.id}>
*   路由配置:
*   Route path="/ShowDetail/:id"
*   ShowDetail页面: 通过this.props.match.params.id获取变量*/
export default ProductList