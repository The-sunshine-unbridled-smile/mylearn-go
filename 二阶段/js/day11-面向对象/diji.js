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

var diJiCreate1, diJiCreate2, diJiMove, playMove, bullet, dibullet,
    collisionPlayTime, corpsesDiTime, collisionDiTime, corpsesPlayTime;


startGame();
function startGame() {
    createPlay();  //创建玩家飞机
    //启用定时器，开始创建多个敌机
    diJiCreate1 = setInterval(createDiJi1, 3000);  //有子弹
    diJiCreate2 = setInterval(createDiJi2, 2000);   //无子弹
    diJiMove = setInterval(moveDiJi, 200);//敌机开始移动
    playMove = setInterval(movePlay, 100);//玩家飞机开始移动
    bullet = setInterval(moveBullet, 100);//玩家飞机子弹移动
    dibullet = setInterval(moveDiBullet, 100);//敌机子弹移动
    collisionPlayTime = setInterval(collisionPlay, 100);//玩家子弹与敌机的碰撞
    corpsesDiTime = setInterval(corpsesDi, 300);//敌机消失
    collisionDiTime = setInterval(collisionDi, 100);  //敌机子弹与玩家飞机的碰撞
    corpsesPlayTime = setInterval(corpsesPlay, 300);  //玩家飞机消失
}
function gameOver() {
    clearInterval(diJiCreate1);
    clearInterval(diJiCreate2);
    clearInterval(diJiMove);
    clearInterval(playMove);
    clearInterval(bullet);
    clearInterval(dibullet);
    clearInterval(collisionPlayTime);
    clearInterval(corpsesDiTime);
    clearInterval(collisionDiTime);
    clearInterval(corpsesPlayTime);
}
//敌机子弹与玩家飞机的碰撞
function collisionDi() {
    for (var i = 0; i < diziDanArr.length; i++) {
        var dizidanLeft = parseInt(diziDanArr[i].imgNodes.style.left);
        var dizidanTop = parseInt(diziDanArr[i].imgNodes.style.top);
        var dizidanWidth = diziDanArr[i].imgNodes.width;
        var dizidanHeight = diziDanArr[i].imgNodes.height;
        var playPlaneLeft = parseInt(playPlane.imgNodes.style.left);
        var playPlaneTop = parseInt(playPlane.imgNodes.style.top);
        var playPlaneWidth = playPlane.imgNodes.width;
        var playPlaneHeight = playPlane.imgNodes.height;
        if (dizidanLeft > (playPlaneLeft - dizidanWidth) && dizidanLeft < (playPlaneLeft + playPlaneWidth)
            && dizidanTop > (playPlaneTop - dizidanHeight) && dizidanTop < (playPlaneTop + playPlaneHeight)) {
            playPlane.blood--;
            if (playPlane.blood == 0) {
                playPlane.imgNodes.src = "feiji/BeiJi_02.png";
                playPlane.isdead = true;
            }
            //子弹消失
            mainObj.removeChild(diziDanArr[i].imgNodes);
            diziDanArr.splice(i, 1);
            i--;
            break;
        }
    }
}

//玩家飞机的消失
function corpsesPlay() {
    if (playPlane.isdead) {
        mainObj.removeChild(playPlane.imgNodes);
        gameOver();
        alert("游戏结束");

    }
}
//玩家子弹与敌机的碰撞
function collisionPlay() {
    for (var i = 0; i < ziDanArr.length; i++) {
        var zidanLeft = parseInt(ziDanArr[i].imgNodes.style.left);
        var zidanTop = parseInt(ziDanArr[i].imgNodes.style.top);
        var zidanWidth = ziDanArr[i].imgNodes.width;
        var zidanHeight = ziDanArr[i].imgNodes.height;
        for (var j = 0; j < diJiArr.length; j++) {
            var diplaneLeft = parseInt(diJiArr[j].imgNodes.style.left);
            var diplaneTop = parseInt(diJiArr[j].imgNodes.style.top);
            var diplaneWidth = diJiArr[j].imgNodes.width;
            var diplaneHeight = diJiArr[j].imgNodes.height;
            if (zidanLeft > (diplaneLeft - zidanWidth) && zidanLeft < (diplaneLeft + diplaneWidth)
                && zidanTop > (diplaneTop - zidanHeight) && zidanTop < (diplaneTop + diplaneHeight)) {
                diJiArr[j].blood--;
                if (diJiArr[j].blood == 0) {
                    diJiArr[j].imgNodes.src = "feiji/BeiJi_02.png";
                    diJiArr[j].isdead = true;
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

//敌机的消失
function corpsesDi() {
    for (var i = 0; i < diJiArr.length; i++) {
        if (diJiArr[i].isdead) {
            mainObj.removeChild(diJiArr[i].imgNodes);
            diJiArr.splice(i, 1);
            i--;
            playPlane.score += 10;
            playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
        }

    }
}

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
        if (top >= 622) {
            mainObj.removeChild(diziDanArr[i].imgNodes);
            diziDanArr.splice(i, 1);
            i--;
        } else {
            diziDanArr[i].move();
        }
    }
}

//创建敌机
function createDiJi1() {
    var x = parseInt(Math.random() * 307) + 40;
    var y = 0;
    var diJi = new diPrototype(x, y, "feiji/BluePlane2.png", 10);
    diJi.init();       //执行飞机的组装
    diJiArr.push(diJi);
    diJi.shot();
}
function createDiJi2() {
    var x = parseInt(Math.random() * 307) + 40;
    var y = 0;
    var diJi = new diPrototype(x, y, "feiji/BluePlane2.png", 10);
    diJi.init();       //执行飞机的组装
    diJiArr.push(diJi);
}
//创建玩家飞机
function createPlay() {
    playPlane = new playPrototype(156, 484, "feiji/GodPlane.png", 30, 0);
    playPlane.init();
    // playPlane.score=0;
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
    this.blood = 2;
    this.isdead = false;
    this.imgNodes = document.createElement("img");

    //方法
    this.shot = function () {
        var top = parseInt(this.imgNodes.style.top);
        var left = parseInt(this.imgNodes.style.left);
        var x = left + 10;
        var y = top + 20;
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
function playPrototype(x, y, src, speed, score) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.score = score;
    this.blood = 15;
    this.isdead = false;
    this.scoreNode = document.createElement("div");
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
        this.scoreNode.style.position = "absolute";
        this.scoreNode.style.width = "100px";
        this.scoreNode.style.height = "30px";
        this.scoreNode.style.top = "10px";
        this.scoreNode.style.left = "0px";
        // this.scoreNode.style.border="1px solid grey";
        this.scoreNode.style.color = "white";
        this.scoreNode.innerHTML = "分数：" + this.score;
        mainObj.appendChild(this.imgNodes);
        mainObj.appendChild(this.scoreNode);
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
     * 移动
     */
    this.move = function () {
        var top = parseInt(this.imgNodes.style.top) + this.speed;
        // if (top <= 662) {
        this.imgNodes.style.top = top + "px";
        // } else {
        //     this.imgNodes.style.top = "0px";
        // }
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

