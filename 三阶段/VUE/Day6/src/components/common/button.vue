<template>
  <div>
    <button :class="btnclass" @click="addLike">{{btntext}}</button>
    <span>{{count}}人点赞</span>
  </div>

</template>

<script>
  /* 子组件需要通过props声明有哪些数据是从父组件传递的
  *  不在data里面自己定义 */
  export default {
    name: 'button',
//    props: ['btntext','btnclass']
    props: {
      btntext: {
        type: String,
        default: '按钮默认值',
//        required: true,
        validator (value) {
          return value.length > 1
        }
      },
      btnclass: {}
    },
    data: function () {
      return {
        count: 0
      }
    },
    methods: {
      addLike () {
//        this.count += 1
//        子组件通过$emit触发父组件上的事件
        this.$emit('clicked')
      }
    }
  }
</script>

<style scoped>
  button{
    width:140px;
    height:40px;
  }
  .red{
    background-color: palevioletred;
  }
  .blue{
    background-color: cornflowerblue;
  }
</style>
