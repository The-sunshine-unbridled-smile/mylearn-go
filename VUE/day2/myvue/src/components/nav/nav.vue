<template>
  <div>
    <nav>
      <ul>
        <li>NAV组件导航1</li>
        <li>导航2</li>
        <li>导航3</li>
      </ul>
    </nav>
  </div>
</template>
<script>
    export default {
        name:'nav',   //新建了一个组件首先给他一个名字
    }
</script>

<style scoped>
  ul li{
    float: left;
    width: 120px;
    height: 30px;
    border: 1px solid red;
  }

</style>
