<template>
  <div>
    <h1>Day 5 Less demo</h1>
    <h2>Day5</h2>
    <h3>测试mycolor</h3>

    <header>
      header
      <nav>
        nav
        <ul>
          ul
          <li>
            li
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
  /*npm install less less-loader --save
   */
  export default {}
</script>

<style scoped lang="less">
  @import '../../assets/less/common.less';
  h1{
    color:@color;
    .myBorder(after,1px,blue)
  }
  h2{
    font-size:15px;
    .myBorder(before,green)
  }

  h3{
    .myColor(#000,25px);
    .mySBorder(10px,3px,4px,7px,15px);
  }

  /*
  header>nav>ul>li{}
  header>nav>ul{}
  header>nav>ul>li:hover{}
  */
  /*header>nav>ul>li*/

  header{
    color:blue;
    >nav{
      color:pink;
      >ul{
        margin:0;
        color:green;
        >li{
          color:red;
          &:hover{
            color:orange;
          }
        }

      }
    }
  }


</style>
