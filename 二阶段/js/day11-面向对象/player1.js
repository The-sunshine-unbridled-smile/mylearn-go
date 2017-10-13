/**
 * Created by uid on 2017/9/12.
 */
var mainobj = document.getElementById("main"); //获取游戏界面的div
/**
 * 键盘按下事件  keycode为得到键盘相应键对应的数字
 */
document.body.onkeydown=function(code) {
    if(code.keyCode==37) {
        //当键盘按下的是左键（对应的数字是37）
        leftbtn=true;
    }
    if(code.keyCode==38) {
        //键盘按的是上键
        topbtn=true;
    }
    if(code.keyCode==39) {
        //右键
        rightbtn=true;
    }
    if(code.keyCode==40) {
        //下键
        buttombtn=true;
    }
    if(code.keyCode==65 || code.keyCode==32) {
        //按下A键 或空格 子弹发射状态改变（发射）
        shutbtn=true;
    }
};
/**
 * 根据键盘按的键,改变相应的状态
 */
document.body.onkeyup=function(code) {
    if(code.keyCode==37) {
        leftbtn=false;
    }
    if(code.keyCode==38) {
        //键盘按的是上键
        topbtn=false;
    }
    if(code.keyCode==39) {
        //右移动
        rightbtn=false;
    }
    if(code.keyCode==40) {
        //下移动
        buttombtn=false;
    }
    if(code.keyCode==65 || code.keyCode==32) {
        //按下A键 或空格 子弹发射状态改变（停止发射）
        shutbtn=false;
    }
};
/**
 * =操作飞机移动的方向（上下左右）
 */
function ctrlplane() {
    if(leftbtn==true) {
        myplane.leftmove(); //调用飞机左移动的方法
    }
    if(rightbtn==true) {
        myplane.rightmove();
    }
    if(topbtn==true) {
        myplane.topmove();
    }
    if(buttombtn==true) {
        myplane.buttommove();
    }
}

/**
 * 玩家飞机对象属性的声明
 */
var myplane; //声明飞机对象
var leftbtn = false; //判断是否左移方向键
var rightbtn = false; //判断是否右移方向键
var topbtn = false; //判断是否上移方向键
var buttombtn = false; //判断是否下移方向键
/**
 * =监听器=
 */
// var ctrlplanestop;
platerCreate();
/**
 *飞机
 */
function platerCreate() {
    var x=0;
    var y=534;
    var player=new createPlayerPlance("feiji/GodPlane.png",x,y,5);
    player.create();
}

function createPlayerPlance(src, x, y, speed) {
    this.src = src;//当前飞机图片的地址为实例化该方法传入的图片地址
    this.x = x;//当前飞机的X轴坐标为传入的X轴坐标
    this.y = y;//当前飞机的Y轴坐标为传入的y轴坐标
    // this.blood = blood;//飞机的当前血量为传入的血量
    this.monvspeed = speed; //当前飞机的移动速度为实例化该方法传入的移动速度
    // this.level = 1; //设定玩家飞机等级，实现后续的升级功能
    // this.wfjdead = false; //我方飞机的状态 为false的时候  飞机没有被击中
    // this.wfjdeadtime = 10; //控制我方飞机被击中产生的爆炸效果消失时间
    this.planeNode = document.createElement("img"); //创建飞机图片对象节点

    /*飞机向左移动*/
    this.leftmove = function() {
        //当飞机超过大DIV80PX时（飞机图片的宽度就是80px）飞机从右边进入
        if(this.planeNode.style.left == "-128px") { //如果飞机图片往左移动刚好离开游戏界面
            this.planeNode.style.left = "313px"; //飞机图片从游戏界面右边进入
        } else {
            //当飞机没有达到临界点时，飞机每移动一次后的坐标为：当前的坐标减去移动速度的距离（PX)
            this.planeNode.style.left =( parseInt(this.planeNode.style.left) - this.monvspeed )+ "px";
        }
    };
    /*飞机向右移动*/
    this.rightmove = function() {
        if(this.planeNode.style.left == "313px") { //如果飞机图片往右移动刚好离开游戏界面
            this.planeNode.style.left = "-128px";
        } else {
            this.planeNode.style.left = (parseInt(this.planeNode.style.left) + this.monvspeed )+ "px";
        }
    };
    /*飞机向上移动*/
    this.topmove = function() {
        if(this.planeNode.style.top == "0px") {
            this.planeNode.style.top = "0px";
        } else {
            this.planeNode.style.top =( parseInt(this.planeNode.style.top) - this.monvspeed )+ "px";
        }
    };
    this.buttommove = function() {
        if(this.planeNode.style.top == "534px") {
            this.planeNode.style.top = "534px"
        } else {
            this.planeNode.style.top = (parseInt(this.planeNode.style.top) + this.monvspeed )+ "px";
        }
    };
    /* 定义飞机的样式参数*/
    this.create = function() {
        this.planeNode.src = this.src;
        this.planeNode.style.left = this.x + "px";
        this.planeNode.style.top = this.y + "px";
        mainobj.appendChild(this.planeNode);
    };
}