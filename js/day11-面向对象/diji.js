/**
 * Created by uid on 2017/9/11.
 */
//全局变量 游戏区域
var mainObj = document.getElementById("main");

//键盘事件
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;

var playPlane;  //玩家飞机
var diJiArr = [];//存放敌机
var ziDanArr = [];//存放玩家子弹
var diziDanArr = [];//存放敌机子弹

//启用定时器，开始创建多个敌机
var diJiCreate = setInterval(createDiJi, 1000);
//敌机开始移动
var diJiMove = setInterval(moveDiJi, 200);
//玩家飞机开始移动
var playMove = setInterval(movePlay, 100);
//玩家飞机子弹移动
var bullet = setInterval(moveBullet, 100);
//敌机子弹移动
var dibullet=setInterval(moveDiBullet,100);

createPlay();
//移动敌机
function moveDiJi() {
    for (var i = 0; i < diJiArr.length; i++) {
        var top = parseInt(diJiArr[i].imgNodes.style.top);
        if (top <= 628) {
            diJiArr[i].move();
        } else {
            //超过了游戏区域就删除敌机
            mainObj.removeChild(diJiArr[i].imgNodes);
            diJiArr.splice(i, 1);
            i--;
        }
    }
}

//移动玩家飞机
function movePlay() {
    if (playPlane == undefined) {
        return;
    }
    if (keyUp) {
        playPlane.moveUp();
    }
    if (keyDown) {
        playPlane.moveDown();
    }
    if (keyLeft) {
        playPlane.moveLeft();
    }
    if (keyRight) {
        playPlane.moveRight();
    }
}

//玩家飞机子弹的移动
function moveBullet() {
    for (var i = 0; i < ziDanArr.length; i++) {
        var top = parseInt(ziDanArr[i].imgNodes.style.top);
        if (top == 0) {
            mainObj.removeChild(ziDanArr[i].imgNodes);
            ziDanArr.splice(i, 1);
            i--;
        } else {
            ziDanArr[i].move();
        }
    }
}

//敌机子弹的移动
function moveDiBullet() {
    for (var i = 0; i < diziDanArr.length; i++) {
        var top = parseInt(diziDanArr[i].imgNodes.style.top);
        if (top >=622) {
            mainObj.removeChild(diziDanArr[i].imgNodes);
            diziDanArr.splice(i, 1);
            i--;
        } else {
            diziDanArr[i].move();
        }
    }
}


//创建敌机
function createDiJi() {
    var x = parseInt(Math.random() * 397);
    var y = 0;
    var diJi = new diPrototype(x, y, "feiji/BluePlane2.png", 10);
    diJi.init();       //执行飞机的组装
    diJiArr.push(diJi);
}


//创建玩家飞机
function createPlay() {
    playPlane = new playPrototype(156, 484, "feiji/GodPlane.png", 30);
    playPlane.init();
}

//定义键盘事件  按下键盘的时候触发，松开键盘法时候取消触发
document.onkeydown = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 32) {
        playPlane.shot();
    }
    if (e.keyCode == 38) {
        keyUp = true;
    }
    if (e.keyCode == 40) {
        keyDown = true;
    }
    if (e.keyCode == 37) {
        keyLeft = true;
    }
    if (e.keyCode == 39) {
        keyRight = true;
    }
};
document.onkeyup = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 38) {
        keyUp = false;
    }
    if (e.keyCode == 40) {
        keyDown = false;
    }
    if (e.keyCode == 37) {
        keyLeft = false;
    }
    if (e.keyCode == 39) {
        keyRight = false;
    }
};

//创建敌机原型
function diPrototype(x, y, src, speed) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNodes = document.createElement("img");

    //方法
    this.shot = function () {
        var top = parseInt(this.imgNodes.style.top);
        var left = parseInt(this.imgNodes.style.left);
        var x = left+10;
        var y = top+20;
        var dibullet = new dibulletPrototype(x, y, "feiji/xia.png", 10);
        dibullet.init();
        diziDanArr.push(dibullet);
    };
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

//创建玩家飞机原型
function playPrototype(x, y, src, speed) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNodes = document.createElement("img");

    //方法
    /**
     * 子弹的发射
     */
    this.shot = function () {
        var width = this.imgNodes.width;
        var top = parseInt(this.imgNodes.style.top);
        var left = parseInt(this.imgNodes.style.left);
        var x = left + width / 2 - 10;
        var y = top - 40 - 10;
        var bullet = new bulletPrototype(x, y, "feiji/bullet_03.png", 10);
        bullet.init();
        ziDanArr.push(bullet);
    };
    /**
     * 移动：4个方向
     */
    this.moveUp = function () {
        var top = parseInt(this.imgNodes.style.top) - this.speed;
        if (top > 0) {
            this.imgNodes.style.top = top + "px"
        }
    };
    this.moveDown = function () {
        var top = parseInt(this.imgNodes.style.top) + this.speed;
        if (top < 534) {
            this.imgNodes.style.top = top + "px"
        }
    };
    this.moveLeft = function () {
        var left = parseInt(this.imgNodes.style.left) - this.speed;
        if (left > 0) {
            this.imgNodes.style.left = left + "px"
        }
    };
    this.moveRight = function () {
        var left = parseInt(this.imgNodes.style.left) + this.speed;
        if (left < 313) {
            this.imgNodes.style.left = left + "px"
        }
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

//创建玩家子弹原型
function bulletPrototype(x, y, src, speed) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNodes = document.createElement("img");
    //方法
    /**
     * 移动：4个方向
     */
    this.move = function () {
        var top = parseInt(this.imgNodes.style.top) - this.speed;
        if (top >= 0) {
            this.imgNodes.style.top = top + "px"
        } else {
            this.imgNodes.style.top = "0px";
        }
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

//创建敌军子弹原型
function dibulletPrototype(x, y, src, speed) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNodes = document.createElement("img");
    //方法
    /**
     * 移动：4个方向
     */
    this.move = function () {
        var top = parseInt(this.imgNodes.style.top) + this.speed;
        if (top >= 0) {
            this.imgNodes.style.top = top + "px";
        } else {
            this.imgNodes.style.top = "0px";
        }
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