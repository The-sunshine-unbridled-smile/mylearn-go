Page({
  data:{
    title:"140A精品推荐",
    classname:"header",
    length:1,
    arr:[
      {
        title: "图片标题1",
        src:"../../images/img1.png"
      },
      {
        title: "图片标题2",
        src: "../../images/img1.png"
      },
      {
        title: "图片标题3",
        src: "../../images/img1.png"
      },
      {
        title: "图片标题4",
        src: "../../images/img1.png"
      }
    ]
  },
  changeTitle(){
    // 仅供访问，不能赋值
    console.log(this.data.title);
    console.log(this.data.arr);
    var newarr = [
      {
        title: "图片标题1111",
        src: "../../images/img1.png"
      },
      {
        title: "图片标题2222",
        src: "../../images/img1.png"
      },
      {
        title: "图片标题3333",
        src: "../../images/img1.png"
      },
      {
        title: "图片标题4444",
        src: "../../images/img1.png"
      }
    ]
    // 修改data,必须要通过this.setData()
    this.setData(
      {title:"修改后的title",
      arr:newarr}
    )
  },
  onLoad(){
    wx.request({
      url: "https://api.douban.com/v2/movie/top250",
      header:{"content-type":"json"},
      // dataType:"json",
      method:"GET",
      success:function(resp){
        console.log(resp);
        //调用setData()设置数据
      }
    })
  }
})