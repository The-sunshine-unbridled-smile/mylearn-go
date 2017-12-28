<template>
  <header>
    <nav>
      <ul>
        <router-link tag="li" id="logo" to="/">
          <img src="../assets/pink.png" alt="">
        </router-link>
        <router-link tag="li" to="/a">首页</router-link>
        <router-link tag="li" to="/b">公司介绍
          <ul>
            <router-link tag="li" to="/s">关于我们</router-link>
            <router-link tag="li" to="/x">团队简介</router-link>
          </ul>
        </router-link>
        <router-link tag="li" to="/c">套餐专区</router-link>
        <router-link tag="li" to="/d">可选服务</router-link>
        <router-link tag="li" to="/e">合作案例</router-link>
        <router-link tag="li" to="/f">会员中心</router-link>
        <router-link tag="li" to="/g">联系我们</router-link>

        <!--<router-link :to="item.url" tag="li" v-for="item in list">{{item.aindex}}</router-link>-->

        <router-link to="/" tag="li" id="me">&#xe622;</router-link>
        <router-link to="/" tag="li" id="shop">&#xe505;</router-link>
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    name: 'mynav',
    data(){
      return {
        /* list: [
         {aindex: "首页",url:"/"},
         {aindex: "公司介绍",url:"/a"},
         {aindex: "套餐专区",url:"/n"},
         {aindex: "可选服务",url:"/b"},
         {aindex: "合作案例",url:"/c"},
         {aindex: "会员中心",url:"/d"},
         {aindex: "联系我们",url:"/e"}
         ]*/
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @color:#5E5E5E;
  * {
    margin: 0;
    padding: 0;
  }
  @font-face {
    src:url("../font/iconfont.woff");
    font-family: myfont;
  }
  nav{
    /*overflow: hidden;*/
    width: 1149px;
    padding:0 100px;
    height: 100px;
    line-height: 100px;
    /*border: 1px solid red;*/
    >ul>li{
      list-style: none;
      font-size: 12px;
      height: 100px;
      float: left;
      padding: 0 20px;
      color: @color;
      transition: all linear .1s;
      position: relative;
      overflow: hidden;
      >ul{
        position: absolute;
        left: 0;
        top:100px;
        li{
          list-style: none;
          width: 86px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #F5928B;
          color: @color;
          margin-bottom: 1px;
          &:hover{
            color:@color ;
          }
        }
      }
    }
  }
  nav>ul>li:hover{
    cursor: pointer;
    overflow: visible;
    color: white;
    background-color: #F5928B;
  }
  #logo{
    margin-top: 12px;
    margin-left: 0;
    margin-right: 200px;
    padding:0;
    height: 76px;
    /*border: 1px solid red;*/
    &:hover{
      background-color:transparent;
    }
  }
  #me,#shop{
    float: right;
    font-size: 20px;
    margin-left: 10px;
    font-family: myfont;
    /*font-weight: 900;*/
    padding: 0;
    &:hover{
      color: @color;
      background-color: transparent;
    }
  }


</style>
