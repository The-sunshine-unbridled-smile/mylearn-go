<template>
  <header>
    <nav>
      <ul>
        <router-link to="/index" tag="li" id="logo">
          <img src="../assets/white.png" alt="">
        </router-link>
        <li>
          <ul>
            <router-link :to="item.url" tag="li" v-for="item in list">{{item.aindex}}</router-link>
          </ul>
          <div id="phone">
            客服热线：400-921-5757
          </div>
        </li>
        <router-link to="/" tag="li" id="contact">
          <span>微信公众号</span>
          <img src="../assets/er.png" alt="" id="weixin">
        </router-link>
      </ul>
    </nav>
  </header>
</template>
<script>
  export default {
    name: 'footer',
    data(){
      return {
        list: [
          {aindex: "首页", url: "/"},
          {aindex: "公司介绍", url: "/a"},
          {aindex: "套餐专区", url: "/n"},
          {aindex: "可选服务", url: "/b"},
          {aindex: "合作案例", url: "/c"},
          {aindex: "会员中心", url: "/d"},
          {aindex: "联系我们", url: "/e"}
        ]
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @color: #5E5E5E;
  * {
    margin: 0;
    padding: 0;
  }

  nav {
    overflow: hidden;
    width: 1149px;
    padding: 5px 100px;
    background-color: #F5928B;
    color: white;
    ul li {
      list-style: none;
      font-size: 12px;
      float: left;
      margin-left: 30px;
      margin-top: 20px;
    }
  }

  /*color: #F5928B ;*/
  #logo {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 100px;
    padding: 0;
    border: none;
  }

  #contact {
    float: right;
    width: 89px;
    /*border: 1px solid red;*/
  }

  #weixin {
    margin: 10px 0;
  }
  #phone{
    clear: both;
    margin-top: 60px;
  }
</style>
