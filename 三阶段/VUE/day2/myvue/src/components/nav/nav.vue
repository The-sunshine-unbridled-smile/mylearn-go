<template>
  <div>
    <nav>
      <ul>
        <!--<li>-->
          <!--router-link会解析为a标签加了#，但不会整体刷新-->
          <!--to="/hello"要跳转到的地址-->
          <router-link to="/hello" active-class="active" tag="li">导航1</router-link>
        <!--</li>-->
        <!--<li>-->
          <router-link to="/day2" active-class="active" tag="li">导航2</router-link>
        <!--</li>-->
        <!--<li>-->
          <router-link to="/product" active-class="active" tag="li">导航3</router-link>
        <!--</li>-->
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'nav',   //新建了一个组件首先给他一个名字
  }
</script>

<style scoped>
  ul li {
    float: left;
    width: 120px;
    height: 30px;
    border: 1px solid red;
    list-style: none;
  }

  div {
    display: inline-block;
  }
  a{
    text-decoration: none;
    color: #0f0f0f;
  }
  .active{
    color: white;
    background-color: deeppink;
  }

</style>
