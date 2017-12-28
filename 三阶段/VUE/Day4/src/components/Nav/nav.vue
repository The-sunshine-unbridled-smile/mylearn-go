<template>
  <div>
    <nav>
      <ul>
        <!--<li>-->
          <router-link to="/hello" active-class="active" tag="li">Hello</router-link>
          <!--<a href="#/hello"></a>-->
          <!--<a :href="to"></a>-->
        <!--</li>-->
        <!--<li>-->
          <router-link to="/day2" active-class="active" tag="li">Day2</router-link>
        <!--</li>-->
        <!--<li>-->
          <router-link to="/product" active-class="active" tag="li">Product</router-link>
          <router-link to="/movies" active-class="active" tag="li">Movies</router-link>
          <router-link to="/maintab" active-class="active" tag="li">Main Tab</router-link>
        <!--</li>-->
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'nav'
  }
</script>

<style scoped>
  ul{
    margin:0;
    padding:0;
  }
  ul li {
    float:left;
    width:150px;
    border:1px solid gray;
    list-style: none;
  }
  nav{
    display:inline-block;
  }
</style>
