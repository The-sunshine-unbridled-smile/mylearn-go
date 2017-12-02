<template>
  <div>
    <button :class="btnclass" @click="addclick">{{btntext}}</button>
    <span>{{count}}个人点赞</span>
  </div>

</template>
<script>
  export default {
    name: 'button',
    /* data:function () {
     return{
     btntext:'按钮'
     }
     },*/


    /*子组件需要通过props声明有哪些数据是从父组件传递的
     * 不在data里面自己定义 父亲就有一个btntext属性可以直接调用
     * 通过属性传递要变化的内容*/
//     props:['btntext','btnclass'],
    props: {    //可以通过对象的方式设置验证条件
      btntext: {
        type: String,
        default: '默认按钮',
        require: true,//必须要设值
        validator(value){    //自定义规则
          return value.length > 1
        }
      },
      btnclass: {}
    },
    data: function () {
      return {
        count: 0,
      }
    },
    methods: {
      addclick () {
//        this.count++
        /*子组件通过$emit触发父组件上的事件，clicked是自定义的事件名*/
        this.$emit("clicked")
      }
    },
  }
</script>

<style scoped>
  .red {
    background-color: mediumvioletred;
  }

  .blue {
    background-color: deepskyblue;
  }
</style>
