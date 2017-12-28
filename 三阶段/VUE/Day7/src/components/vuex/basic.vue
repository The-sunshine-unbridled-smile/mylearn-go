<template>
  <div>
    <h1>计数器: {{$store.state.count}}</h1>

    <button @click="add">+</button>
    <button @click="addAsync(10)">异步+</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'vuexdemo',
    data(){
      return {}
    },
    methods:{
//      increment(){
//        console.log(this.$store)
//        this.$store.commit("increment",10)
//        this.$store.dispatch("increment",10)
//        console.log(mapActions(['increment']))
//      }
//      incrementAsync(){
//        this.$store.dispatch("incrementAsync",5)
//      }
//      ...mapActions(['increment','incrementAsync'])
      ...mapActions({
        add:'increment',
        addAsync:'incrementAsync'
      })
//      increment(){}=> 调用actions
//      incrementAsync(){}
    }
  }
</script>

<style scoped>
</style>
