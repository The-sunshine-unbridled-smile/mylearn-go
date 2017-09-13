/**
 * Created by uid on 2017/9/13.
 */

var mainObj = document.getElementById("main");
var playPlane;   //玩家
var ziDanArr = [];  //玩家子弹
var diPlaneArr=[];  //敌方飞机
var diBirdArr=[];  //敌方小鸟

//键盘事件
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;
createPlay();
var movePlayTime = setInterval(movePlay, 100);   //玩家的移动
var moveBulletTime = setInterval(moveBullet, 30); //玩家子弹的移动
var createDiPlaneTime=setInterval(createDiPlane,2000); //敌方飞机
var createDiBirdTime=setInterval(createDiBird,1000);  //敌方小鸟
var moveDiPlaneTime=setInterval(moveDiPlane,200);  //敌方飞机的移动
var moveDiBirdTime=setInterval(moveDiBird,100);  //敌方小鸟的移动
var collisionPlayTime=setInterval(collisionPlay,100) ;//玩家子弹与敌人小飞机的碰撞
// var corpsesDiTime=setInterval(corpsesDi,200); //敌机的消失

//玩家子弹与敌人小飞机的碰撞
function collisionPlay() {
    for (var i = 0; i < ziDanArr.length; i++) {
        var zidanLeft = parseInt(ziDanArr[i].imgNodes.style.left);
        var zidanTop = parseInt(ziDanArr[i].imgNodes.style.top);
        var zidanWidth = ziDanArr[i].imgNodes.width;
        var zidanHeight = ziDanArr[i].imgNodes.height;
        for (var j = 0; j < diPlaneArr.length; j++) {
            var diplaneLeft = parseInt(diPlaneArr[j].imgNodes.style.left);
            var diplaneTop = parseInt(diPlaneArr[j].imgNodes.style.top);
            var diplaneWidth = diPlaneArr[j].imgNodes.width;
            var diplaneHeight = diPlaneArr[j].imgNodes.height;
            if (zidanLeft > (diplaneLeft - zidanWidth) && zidanLeft < (diplaneLeft + diplaneWidth)
                && zidanTop > (diplaneTop - zidanHeight) && zidanTop < (diplaneTop + diplaneHeight)) {
                diPlaneArr[j].blood--;
                if (diPlaneArr[j].blood == 0) {
                    diPlaneArr[j].imgNodes.src = "冒险岛/enemy/thing.gif";
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[i].imgNodes);
                ziDanArr.splice(i, 1);
                i--;
                break
            }
        }
    }
}

//宝箱的消失
/*function corpsesDi() {
    for (var i = 0; i < diPlaneArr.length; i++) {
        if (diPlaneArr[i].isdead) {
            mainObj.removeChild(diPlaneArr[i].imgNodes);
            diPlaneArr.splice(i, 1);
            i--;
        }
    }
}*/

//玩家的移动
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

//玩家子弹的移动
function moveBullet() {
    for (var i = 0; i < ziDanArr.length; i++) {
        var left = parseInt(ziDanArr[i].imgNodes.style.left);
        if (left == 1314) {
            mainObj.removeChild(ziDanArr[i].imgNodes);
            ziDanArr.splice(i, 1);
            i--;
        } else {
            ziDanArr[i].move();
        }
    }
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

//创建玩家
function createPlay() {
    playPlane = new playPrototype(156, 300, "冒险岛/dragon/small/magicmissile.gif", 30, 0);
    playPlane.init();
}

//创建敌人（小飞机）
function createDiPlane() {
    var x = 1100;
    var y = parseInt(Math.random()*500);
    var diPlane = new diPrototype(x, y, "冒险岛/enemy/plane/move.gif", 10);
    diPlaneArr.push(diPlane);
}
function createDiBird() {
    var x = 1200;
    var y = parseInt(Math.random()*600);
    var diBird = new diPrototype(x, y, "冒险岛/enemy/bird/move.gif", 20);
    diBirdArr.push(diBird);
    // diPlane.shot();
}

//移动敌人（小飞机）
function moveDiPlane() {
    for (var i = 0; i < diPlaneArr.length; i++) {
        var left = 1300- parseInt(diPlaneArr[i].imgNodes.style.left);
        if (left>0) {
            diPlaneArr[i].move();
        } else {
            mainObj.removeChild(diPlaneArr[i].imgNodes);
            diPlaneArr.splice(i, 1);
            i--;
        }
    }
}
function moveDiBird() {
    for (var i = 0; i < diBirdArr.length; i++) {
         var birdLeft= 1200- parseInt(diBirdArr[i].imgNodes.style.left);
        if (birdLeft>0) {
            diBirdArr[i].move();
        } else {
            mainObj.removeChild(diBirdArr[i].imgNodes);
            diBirdArr.splice(i,1);
            i--;
        }
    }
}
//玩家原型
function playPrototype(x, y, src, speed, score) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.score = score;
    this.blood = 5;
    this.isdead = false;
    this.scoreNode = document.createElement("div");
    this.imgNodes = document.createElement("img");

    //方法
    /**
     * 子弹的发射
     */
    this.shot = function () {
        var width = this.imgNodes.width;
        var height = this.imgNodes.height;
        var top = parseInt(this.imgNodes.style.top) + height / 2;
        var left = parseInt(this.imgNodes.style.left) + width;
        var x = left + 10;
        var y = top;
        var bullet = new bulletPrototype(x, y, "冒险岛/dragon/small/att.gif", 10);
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
        if (top < 527) {
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
        if (left < 1241) {
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
        this.scoreNode.style.position = "absolute";
        this.scoreNode.style.width = "100px";
        this.scoreNode.style.height = "30px";
        this.scoreNode.style.top = "10px";
        this.scoreNode.style.left = "0px";
        this.scoreNode.style.color = "white";
        this.scoreNode.innerHTML = "分数：" + this.score;
        mainObj.appendChild(this.imgNodes);
        mainObj.appendChild(this.scoreNode);
    }
}

//创建敌人原型
function diPrototype(x, y, src, speed) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.blood = 2;
    this.isdead = false;
    this.imgNodes = document.createElement("img");

    //方法
    this.shot = function () {
        var top = parseInt(this.imgNodes.style.top);
        var left =parseInt(this.imgNodes.style.left);
        var x = left ;
        var y = top;
        // var dibullet = new dibulletPrototype(x, y, "feiji/xia.png", 10);
        dibullet.init();
        diziDanArr.push(dibullet);
    };
    /**
     * 移动：相当于是控制敌机的top值  top=原来的top值+移动的速度speed
     */
    this.move = function () {
        this.imgNodes.style.left = (parseInt(this.imgNodes.style.left) - this.speed) + "px"
    };
    /**
     *初始化(组装)
     */
    this.init = function () {
        this.imgNodes.src = this.src;
        this.imgNodes.style.left = x + "px";
        this.imgNodes.style.top = y + "px";
        mainObj.appendChild(this.imgNodes);
    };
    this.init();
}

//玩家子弹原型
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
        var left = parseInt(this.imgNodes.style.left) + this.speed;
            this.imgNodes.style.left = left + "px"
    };
    /**
     *初始化(组装)
     */
    this.init = function () {
        this.imgNodes.src = this.src;
        this.imgNodes.style.left = x + "px";
        this.imgNodes.style.top = y + "px";
        mainObj.appendChild(this.imgNodes);
    };
    this.init();
}


