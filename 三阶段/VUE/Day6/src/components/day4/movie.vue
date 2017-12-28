<template>
  <div>
    <!--<img src="../../assets/loading.gif" alt="" v-if="isShow">-->
    <div class="moviebox" v-loading.fullscreen.lock="isShow" element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
      <router-link to="/" v-for="item in movies">
        <showbox :productTitle="item.title" :productSubtitle="item.original_title"
                 :productPrice="item.id" :imgsrc="item.images.medium" >
          <h1 slot="headerslot">最新的电影</h1>
        </showbox>
      </router-link>
    </div>

  </div>
</template>

<script>
  import showbox from '../day3/showbox.vue'
  export default {
    name: 'movie',
    data () {
      return {
        movies: [],
        isShow:true
      }
    },
    components:{
      showbox: showbox
    },
    created () {
      // 添加请求拦截器
      this.$axios.interceptors.request.use((config) => {
        // 在发送请求之前做些什么
        console.log("请求前拦截")
        console.log(this)
        this.isShow=true
        console.log(config);
        return config;
      });

// 添加响应拦截器
      this.$axios.interceptors.response.use((response) => {
        // 对响应数据做点什么
        console.log("请求成功，响应回来了");
        this.isShow=false
        console.log(response);
        return response;
      });
      this.$axios.get("/douban/movie/in_theaters")
        .then(resp => {
          console.log(resp)
          this.movies = resp.data.subjects
        })
    },
    destroyed () {
      console.log("movie 被销毁");
    }
  }
</script>

<style scoped>
  .moviebox{
    height:1000px;
  }
</style>
