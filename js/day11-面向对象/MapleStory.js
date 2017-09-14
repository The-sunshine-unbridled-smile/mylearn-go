/**
 * Created by uid on 2017/9/13.
 */

var mainObj = document.getElementById("main");
var myExper = document.getElementById("experience");

var playPlane;   //玩家
var bullet;  //玩家子弹
var ziDanArr = [];  //存放玩家子弹
var diPlaneArr = [];  //敌方飞机
var diBirdArr = [];  //敌方小鸟
var diGhostArr = [];  //敌方怪兽
var diBossArr = [];  //敌方boss
var bossBullteArr = []; //boss子弹
//玩家的图片
var playImg = ["冒险岛/dragon/small/magicmissile.gif", "冒险岛/dragon/middle/magicmissile.gif", "冒险岛/dragon/large/magicmissile.gif", "冒险岛/dragon/final/magicmissile.gif"];
//玩家的子弹图片
var bullteImg = ["冒险岛/dragon/small/att.gif", "冒险岛/dragon/middle/att.gif", "冒险岛/dragon/large/att.gif", "冒险岛/dragon/final/att.gif"];

//键盘事件
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;

createPlay();
var movePlayTime = setInterval(movePlay, 100);   //玩家的移动
var moveBulletTime = setInterval(moveBullet, 30); //玩家子弹的移动
createDiPlane();
var createDiPlaneTime = setInterval(createDiPlane, 9000); //敌方飞机
setTimeout(createDiBird, 2000);
var createDiBirdTime = setInterval(createDiBird, 8000);  //敌方小鸟
var moveDiPlaneTime = setInterval(moveDiPlane, 100);  //敌方飞机的移动
var moveDiBirdTime = setInterval(moveDiBird, 200);  //敌方小鸟的移动
var collisionPlayTime = setInterval(collisionPlay, 100);//玩家子弹与敌人小飞机的碰撞
var corpsesDiTime = setInterval(corpsesDi, 2000); //敌方消失
var createDiGhostTime = setInterval(createDiGhost, 10000);//敌方怪兽
var moveDiGhostTime = setInterval(moveDiGhost, 200);//敌方怪兽的移动
var createDiBossTime = setInterval(createDiBoss, 30000);//敌方boss
var moveBossTime = setInterval(moveBoss, 300);  //敌方boss的移动
var moveBossBulletTime = setInterval(moveBossBullet, 200); //敌方boss子弹的移动

/*setTimeout(exper, 30000);
//精力瓶
function exper() {
    myExper.src = "冒险岛/ui/expFull.gif";
    playPlane.src = playImg[1];
    playPlane.init();
    for(var i=0;i<ziDanArr.length;i++){
        ziDanArr[i].src= bullteImg[1];
        ziDanArr[i] .init();
    }
  /!*  bullet.src = bullteImg[1];
    bullet.init();*!/
}
setTimeout(exper2, 50000);
//精力瓶
function exper2() {
    myExper.src = "冒险岛/ui/expFull.gif";
    playPlane.src = playImg[2];
    playPlane.init();
   for(var i=0;i<ziDanArr.length;i++){
       ziDanArr[i].src= bullteImg[2];
       bullet.init();
   }

}
setTimeout(exper3, 80000);
//精力瓶
function exper3() {
    myExper.src = "冒险岛/ui/expFull.gif";
    playPlane.src = playImg[3];
    playPlane.init();
    bullet.src = bullteImg[3];
    bullet.init();
}*/




//玩家子弹与敌人小飞机，小鸟的碰撞；其中飞机变为宝箱，小鸟消失
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
        for (var k = 0; k < diBirdArr.length; k++) {
            var dibirdLeft = parseInt(diBirdArr[k].imgNodes.style.left);
            var dibirdTop = parseInt(diBirdArr[k].imgNodes.style.top);
            var dibirdWidth = diBirdArr[k].imgNodes.width;
            var dibirdHeight = diBirdArr[k].imgNodes.height;
            if (zidanLeft > (dibirdLeft - zidanWidth) && zidanLeft < (dibirdLeft + dibirdWidth)
                && zidanTop > (dibirdTop - zidanHeight) && zidanTop < (diplaneTop + dibirdHeight)) {
                diBirdArr[k].blood--;
                if (diBirdArr[k].blood == 0) {
                    diBirdArr[k].imgNodes.src = "冒险岛/enemy/bird/die.gif";
                    diBirdArr[k].isdead = true;
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[k].imgNodes);
                ziDanArr.splice(k, 1);
                k--;
                break
            }
        }
        for (var m = 0; m < diGhostArr.length; m++) {
            var ghostLeft = parseInt(diGhostArr[m].imgNodes.style.left);
            var ghostTop = parseInt(diGhostArr[m].imgNodes.style.top);
            var ghostWidth = diGhostArr[m].imgNodes.width;
            var ghostHeight = diGhostArr[m].imgNodes.height;
            if (zidanLeft > (ghostLeft - zidanWidth) && zidanLeft < (ghostLeft + ghostWidth)
                && zidanTop > (ghostTop - zidanHeight) && zidanTop < (ghostTop + ghostHeight)) {
                diGhostArr[m].blood--;
                if (diGhostArr[m].blood == 0) {
                    diGhostArr[m].imgNodes.src = "冒险岛/enemy/ghost/die.gif";
                    diGhostArr[m].isdead = true;
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[m].imgNodes);
                ziDanArr.splice(m, 1);
                m--;
                break
            }
        }
        for (var n = 0; n < diGhostArr.length; n++) {
            var bossLeft = parseInt(diBossArr[n].imgNodes.style.left);
            var bossTop = parseInt(diBossArr[n].imgNodes.style.top);
            var bossWidth = diBossArr[n].imgNodes.width;
            var bossHeight = diBossArr[n].imgNodes.height;
            if (zidanLeft > (zidanLeft - zidanWidth) && zidanLeft < (bossLeft + bossWidth)
                && zidanTop > (bossTop - zidanHeight) && zidanTop < (bossTop + bossHeight)) {
                diBossArr[n].blood--;
                if (diBossArr[n].blood == 0) {
                    diBossArr[n].imgNodes.src = "冒险岛/enemy/boss/die.gif";
                    diBossArr[n].isdead = true;
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[n].imgNodes);
                ziDanArr.splice(n, 1);
                n--;
                break
            }
        }
    }
}
//敌人消失
function corpsesDi() {
    for (var i = 0; i < diBirdArr.length; i++) {
        if (diBirdArr[i].isdead) {
            mainObj.removeChild(diBirdArr[i].imgNodes);
            diBirdArr.splice(i, 1);
            i--;
            playPlane.score += 10;
            playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
        }
    }
    for (var j = 0; j < diGhostArr.length; j++) {
        if (diGhostArr[j].isdead) {
            mainObj.removeChild(diGhostArr[j].imgNodes);
            diGhostArr.splice(j, 1);
            j--;
            playPlane.score += 20;
            playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
        }
    }
    for (var k = 0; k < diBossArr.length; k++) {
        if (diBossArr[k].isdead) {
            mainObj.removeChild(diBossArr[k].imgNodes);
            diBossArr.splice(k, 1);
            clearInterval(bossPause);
            k--;
            playPlane.score += 50;
            playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
        }
    }
}

//创建敌人（小飞机）
function createDiPlane() {
    var x = 1100;
    var y = parseInt(Math.random() * 500);
    var diPlane = new diPrototype(x, y, "冒险岛/enemy/plane/move.gif", 10);
    diPlaneArr.push(diPlane);
}
//创建敌人（小鸟）
function createDiBird() {
    var x = 1100;
    var y = parseInt(Math.random() * 500);
    var diBird = new diPrototype(x, y, "冒险岛/enemy/bird/move.gif", 10);
    diBirdArr.push(diBird);
}
//创建敌人（怪兽）
function createDiGhost() {
    var x = 1242;
    var y = parseInt(Math.random() * 528);
    var diGhost = new diPrototype(x, y, "冒险岛/enemy/ghost/move.gif", 10);
    diGhostArr.push(diGhost);
}
//创建敌人boss]
function createDiBoss() {
    var x = 1003;
    var y = parseInt(Math.random() * 446);
    var diBoss = new diPrototype(x, y, "冒险岛/enemy/boss/attack.gif", 10,20);
    diBossArr.push(diBoss);
    setTimeout(bossHit, 0);
    bossPause= setInterval(bossHit, 4000);
    function bossHit() {
        diBoss.shot();
    }
}

//boss子弹的移动
function moveBossBullet() {
    for (var i = 0; i < bossBullteArr.length; i++) {
        var left = parseInt(bossBullteArr[i].imgNodes.style.left);
        if (left == 0) {
            mainObj.removeChild(bossBullteArr[i].imgNodes);
            bossBullteArr.splice(i, 1);
            i--;
        } else {
            bossBullteArr[i].move();
        }
    }
}

//移动敌人（小飞机）
function moveDiPlane() {
    for (var i = 0; i < diPlaneArr.length; i++) {
        var left = 1300 - parseInt(diPlaneArr[i].imgNodes.style.left);
        if (left > 0) {
            diPlaneArr[i].move();
        } else {
            mainObj.removeChild(diPlaneArr[i].imgNodes);
            diPlaneArr.splice(i, 1);
            i--;
        }
    }
}
//移动敌人（小鸟）
function moveDiBird() {
    for (var i = 0; i < diBirdArr.length; i++) {
        var left = 1300 - parseInt(diBirdArr[i].imgNodes.style.left);
        if (left > 0) {
            diBirdArr[i].move();
        } else {
            mainObj.removeChild(diBirdArr[i].imgNodes);
            diBirdArr.splice(i, 1);
            i--;
        }
    }
}
//移动敌人（怪兽）
function moveDiGhost() {
    for (var i = 0; i < diGhostArr.length; i++) {
        var left = 1300 - parseInt(diGhostArr[i].imgNodes.style.left);
        if (left > 0) {
            diGhostArr[i].move1();
        } else {
            mainObj.removeChild(diGhostArr[i].imgNodes);
            diGhostArr.splice(i, 1);
            i--;
        }
    }
}
//移动敌人boss
function moveBoss() {
    for (var i = 0; i < diBossArr.length; i++) {
        var left = 1300 - parseInt(diBossArr[i].imgNodes.style.left);
        if (left > 0) {
            diBossArr[i].move();
        } else {
            mainObj.removeChild(diBossArr[i].imgNodes);
            diBossArr.splice(i, 1);
            i--;
        }
    }
}

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

/*function daZhao() {
 mainObj.innerHTML+="<img src='冒险岛/skill.gif' style='position: absolute;top: -20px;left: 80px'/>";
 }*/

//定义键盘事件  按下键盘的时候触发，松开键盘法时候取消触发
document.onkeydown = function () {
    var e = window.event || arguments[0];
    /*   if(e.keyCode==13){
     daZhao();
     }*/
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
    playPlane = new playPrototype(156, 300, playImg[0], 30, 0);
    playPlane.init();
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
        bullet = new bulletPrototype(x, y, bullteImg[0], 10);
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
        this.scoreNode.style.right = "100px";
        this.scoreNode.style.color = "white";
        this.scoreNode.innerHTML = "分数：" + this.score;
        mainObj.appendChild(this.imgNodes);
        mainObj.appendChild(this.scoreNode);
    }
}

//创建敌人原型
function diPrototype(x, y, src, speed,blood) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    blood=2;
    this.blood = blood;
    this.isdead = false;
    this.imgNodes = document.createElement("img");

    //方法
    this.shot = function () {
        var top = parseInt(this.imgNodes.style.top);
        var left = parseInt(this.imgNodes.style.left);
        var x = left;
        var y = top;
        var bossbullet = new bossbulletPrototype(x, y, "冒险岛/enemy/boss/attackBall.gif", 30);
        bossbullet.init();
        bossBullteArr.push(bossbullet);
    };
    /**
     * 移动：相当于是控制敌机的top值  top=原来的top值+移动的速度speed
     */
    this.move = function () {
        this.imgNodes.style.left = (parseInt(this.imgNodes.style.left) - this.speed) + "px";
    };
    this.move1 = function () {
        this.imgNodes.style.left = (parseInt(this.imgNodes.style.left) - this.speed) + "px";
        this.imgNodes.style.top = (parseInt(Math.random() * 200) + 68) + "px";
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

//boss子弹原型
function bossbulletPrototype(x, y, src, speed) {
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
        var left = parseInt(this.imgNodes.style.left) - this.speed;
        this.imgNodes.style.left = left + "px";
    };
    /**
     *初始化(组装)
     */
    this.init = function () {
        this.imgNodes.src = this.src;
        this.imgNodes.style.left = x + "px";
        this.imgNodes.style.top = (y + 60) + "px";
        mainObj.appendChild(this.imgNodes);
    }
}


