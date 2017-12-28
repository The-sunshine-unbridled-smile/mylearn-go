<template>
  <div>
    <nav>
      <ul>
        <li>菜单1</li>
        <li>菜单2</li>
        <li>菜单3</li>
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
