/**
 * Created by uid on 2017/9/11.
 */
//全局变量 游戏区域
var mainObj = document.getElementById("main");

//存放敌机
var diJiArr = [];

//启用定时器，开始创建多个敌机
var diJiCreate = setInterval(createDiJi, 1000);
//敌机开始移动
var diJiMove = setInterval(moveDiJi, 200);

//移动敌机
function moveDiJi() {
    for (var i = 0; i < diJiArr.length; i++) {
        var top=parseInt(diJiArr[i].imgNodes.style.top);
        if (top<=628){
            diJiArr[i].move();
        }else {
            //超过了游戏区域就删除敌机
            mainObj.removeChild(diJiArr[i].imgNodes);
            diJiArr.splice(i,1);
            i--;
        }

    }

}

//根据飞机原型创建敌机
function createDiJi() {
    var x = parseInt(Math.random() * 397);
    var y = 0;
    var diJi = new diPrototype(x, y, "feiji/BluePlane2.png", 10);
    diJi.init();       //执行飞机的组装
    diJiArr.push(diJi);
}


//创建飞机原型
function diPrototype(x, y, src, speed) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNodes = document.createElement("img");

    //方法
    /**
     * 移动：相当于是控制敌机的top值  top=原来的top值+移动的速度speed
     */
    this.move = function () {
        this.imgNodes.style.top = (parseInt(this.imgNodes.style.top) + this.speed) + "px"
    };
    /**
     *初始化(组装)
     */
    this.init = function () {
        this.imgNodes.src = this.src;
        this.imgNodes.style.left = x + "px";
        this.imgNodes.style.top = y + "px";
        mainObj.appendChild(this.imgNodes);
    }
}