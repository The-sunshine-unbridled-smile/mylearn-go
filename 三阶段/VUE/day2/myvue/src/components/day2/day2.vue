<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>我的day2，h2标题</h2>
    <btn btntext="按钮1" btnclass="red" @clicked="total++"/>   <!--使用btn组件-->
    <btn btntext="按钮2" btnclass="blue" @clicked="total++"/>
    <btn btntext="按钮3" @clicked="total++"/>
    <!-- @clicked是调用的子组件自定义的事件名，触发的是自身的事件，父亲可以监听到这个事件-->

    <h3>从父亲那里拿到的数据{{fromdad}}</h3>
    <!--<button @click="total+=1">day2自己按钮</button> &lt;!&ndash;自己的才可直接监听&ndash;&gt;-->
    <h1>day2.vue页面上总的点赞数：{{total}}</h1>
    <!--total是自身的数据,-->
  </div>
</template>
<script>
  import button from './button.vue'  /*引入组件*/
  /* export default 导出组件 导出对象；这个对象就是Vue的实例*/
  export default {
    name: 'day2', //组件名字
    data: function () {//组件里面的data必须是一个回调函数
      return{
        msg: 'day2组件',
        total:0,
      }
    },
    components :{  /*注册组件 注册出来的属性名btn就是标签名*/
      btn:button,

    },
    props:['fromdad'],
  }
</script>

<style scoped>
  /*scoped让样式不互相影响；如果不加scoped会给所有的h1都加上样式*/
  h1{
    color: red;
  }
</style>
