/**
 * Created by uid on 2017/9/13.
 */
var mainObj = document.getElementById("main");
var scroe = document.getElementById("scroe");
var span = document.getElementById("span");
var resultNum = document.getElementById("result");
var numImg = resultNum.getElementsByTagName("img");
var num = ["dao/num/0.gif", "dao/num/1.gif", "dao/num/2.gif", "dao/num/3.gif", "dao/num/4.gif", "dao/num/5.gif", "dao/num/6.gif", "dao/num/7.gif", "dao/num/8.gif", "dao/num/9.gif", "dao/num/d.png"];

var playPlane;   //玩家
var bullet;  //玩家子弹
var ziDanArr = [];  //存放玩家子弹
var diPlaneArr = [];  //敌方飞机
var diBirdArr = [];  //敌方小鸟
var diGhostArr = [];  //敌方怪兽
var diBossArr = [];  //敌方boss
var bossBullteArr = []; //boss子弹
var chestArr = []; //宝箱

//玩家的图片
var playImg = ["dao/dragon/small/magicmissile.gif", "dao/dragon/middle/magicmissile.gif", "dao/dragon/large/magicmissile.gif", "dao/dragon/final/magicmissile.gif"];
//玩家的子弹图片
var bullteImg = ["dao/dragon/small/att.gif", "dao/dragon/middle/att.gif", "dao/dragon/large/att.gif", "dao/dragon/final/att.gif"];

//键盘事件
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;
var movePlayTime, moveBulletTime, createDiPlaneTime, createDiBirdTime, moveDiPlaneTime, moveDiBirdTime,
    collisionPlayTime, corpsesDiTime, collisionDiTime, corpsesPlayTime,
    createDiGhostTime, moveDiGhostTime, createDiBossTime, moveBossTime, moveBossBulletTime;
startGame();
function startGame() {
    createPlay();
    movePlayTime = setInterval(movePlay, 100);   //玩家的移动
    moveBulletTime = setInterval(moveBullet, 30); //玩家子弹的移动
    createDiPlane();
    createDiPlaneTime = setInterval(createDiPlane, 9000); //敌方飞机
    setTimeout(createDiBird, 2000);
    createDiBirdTime = setInterval(createDiBird, 8000);  //敌方小鸟
    moveDiPlaneTime = setInterval(moveDiPlane, 100);  //敌方飞机的移动
    moveDiBirdTime = setInterval(moveDiBird, 200);  //敌方小鸟的移动
    collisionPlayTime = setInterval(collisionPlay, 100);//玩家子弹与敌人小飞机的碰撞
    corpsesDiTime = setInterval(corpsesDi, 2000); //敌方消失
    createDiGhostTime = setInterval(createDiGhost, 10000);//敌方怪兽
    moveDiGhostTime = setInterval(moveDiGhost, 200);//敌方怪兽的移动
    createDiBossTime = setInterval(createDiBoss, 15000);//敌方boss
    moveBossTime = setInterval(moveBoss, 300);  //敌方boss的移动
    moveBossBulletTime = setInterval(moveBossBullet, 200); //敌方boss子弹的移动
    collisionDiTime = setInterval(collisionDi, 100);  //敌机子弹与玩家的碰撞
    corpsesPlayTime = setInterval(corpsesPlay, 500);  //玩家消失
}
//游戏结束，暂停游戏
function gameOver() {
    clearInterval(movePlayTime);
    clearInterval(moveBulletTime);
    clearInterval(createDiPlaneTime);
    clearInterval(createDiBirdTime);
    clearInterval(moveDiPlaneTime);
    clearInterval(moveDiBirdTime);
    clearInterval(collisionPlayTime);
    clearInterval(corpsesDiTime);
    clearInterval(collisionDiTime);
    clearInterval(corpsesPlayTime);
    clearInterval(createDiGhostTime);
    clearInterval(moveDiGhostTime);
    clearInterval(createDiBossTime);
    clearInterval(moveBossTime);
    clearInterval(moveBossBulletTime);
}

var countDownTimer=setInterval(countDown, 1000);
//时间倒计时
var timer = 90;
var i = 9;
var j = 5;
var a = 9;
var b = 5;
function countDown() {
    timer--;
    if (timer == 0) {
        gameOver();
        span.innerHTML = playPlane.score;
        scroe.style.display = "block";
        numImg[1].src = num[0];
        numImg[3].src = num[0];
        numImg[4].src = num[0];
    }
    else if (timer > 0 && timer < 60) {
        numImg[1].src = num[0];
        numImg[3].src = "dao/num/" + b + ".gif";
        numImg[4].src = "dao/num/" + a + ".gif";
        if (a > 0) {
            a--;
            console.log(a);
        } else if (a == 0) {
            a = 9;
            if (b >= 0) {
                numImg[3].src = "dao/num/" + b + ".gif";
                b--;
            } else {
                numImg[3].src = "dao/num/" + 0 + ".gif";
            }
        }
    }
    else if (timer == 60) {
        numImg[3].src = "dao/num/" + j + ".gif";
        numImg[4].src = "dao/num/" + i + ".gif";
    }
    else if (timer > 60) {
        numImg[1].src = num[1];
        numImg[3].src = "dao/num/" + (j - 3) + ".gif";
        numImg[4].src = "dao/num/" + i + ".gif";
        if (i > 0) {
            i--;
        } else if (i == 0) {
            i = 9;
            if (j >= 0) {
                numImg[3].src = "dao/num/" + (j - 3) + ".gif";
                j--;
            } else {
                numImg[3].src = "dao/num/" + 0 + ".gif";
            }
        }
    }

}

//敌人子弹与玩家的碰撞
function collisionDi() {
    for (var i = 0; i < bossBullteArr.length; i++) {
        var dizidanLeft = parseInt(bossBullteArr[i].imgNodes.style.left);
        var dizidanTop = parseInt(bossBullteArr[i].imgNodes.style.top);
        var dizidanWidth = bossBullteArr[i].imgNodes.width;
        var dizidanHeight = bossBullteArr[i].imgNodes.height;
        var playPlaneLeft = parseInt(playPlane.imgNodes.style.left);
        var playPlaneTop = parseInt(playPlane.imgNodes.style.top);
        var playPlaneWidth = playPlane.imgNodes.width;
        var playPlaneHeight = playPlane.imgNodes.height;
        if (dizidanLeft > (playPlaneLeft - dizidanWidth) && dizidanLeft < (playPlaneLeft + playPlaneWidth)
            && dizidanTop > (playPlaneTop - dizidanHeight) && dizidanTop < (playPlaneTop + playPlaneHeight)) {
            playPlane.blood--;
            if (playPlane.blood == 0) {
                playPlane.imgNodes.src = "dao/dragon/dead.gif";
                playPlane.isdead = true;
            }
            //子弹消失
            mainObj.removeChild(diziDanArr[i].imgNodes);
            diziDanArr.splice(i, 1);
            i--;
            break
        }
    }

}
//玩家消失
function corpsesPlay() {
    if (playPlane.isdead) {
        clearInterval(countDownTimer);
        mainObj.removeChild(playPlane.imgNodes);
        gameOver();
        span.innerHTML = playPlane.score;
        scroe.style.display = "block";
    }
}

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
                    diPlaneArr[j].imgNodes.src = "dao/enemy/plane/die.gif";
                    diPlaneArr[j].isdead = true;
                    createChest();
                    // diPlaneArr[j].imgNodes.src = "dao/enemy/thing.gif";
                    playPlane.score += 10;
                    playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
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
                    diBirdArr[k].imgNodes.src = "dao/enemy/bird/die.gif";
                    diBirdArr[k].isdead = true;
                    playPlane.score += 20;
                    playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
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
                    diGhostArr[m].imgNodes.src = "dao/enemy/ghost/die.gif";
                    diGhostArr[m].isdead = true;
                    playPlane.score += 30;
                    playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[m].imgNodes);
                ziDanArr.splice(m, 1);
                m--;
                break
            }
        }
        for (var n = 0; n < diBossArr.length; n++) {
            var bossLeft = parseInt(diBossArr[n].imgNodes.style.left);
            var bossTop = parseInt(diBossArr[n].imgNodes.style.top);
            var bossWidth = diBossArr[n].imgNodes.width;
            var bossHeight = diBossArr[n].imgNodes.height;
            if (zidanLeft > (zidanLeft - zidanWidth) && zidanLeft < (bossLeft + bossWidth)
                && zidanTop > (bossTop - zidanHeight) && zidanTop < (bossTop + bossHeight)) {
                diBossArr[n].blood--;
                if (diBossArr[n].blood == 0) {
                    diBossArr[n].imgNodes.src = "dao/enemy/boss/die.gif";
                    diBossArr[n].isdead = true;
                    playPlane.score += 80;
                    playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[n].imgNodes);
                ziDanArr.splice(n, 1);
                n--;
                break
            }
        }
        for (var b = 0; b < chestArr.length; b++) {
            var chestLeft = parseInt(chestArr[b].imgNodes.style.left);
            var chestTop = parseInt(chestArr[b].imgNodes.style.top);
            var chestWidth = chestArr[b].imgNodes.width;
            var chestHeight = chestArr[b].imgNodes.height;
            if (zidanLeft > (zidanLeft - zidanWidth) && zidanLeft < (chestLeft + chestWidth)
                && zidanTop > (chestTop - zidanHeight) && zidanTop < (chestTop + chestHeight)) {
                chestArr[b].blood--;
                if (chestArr[b].blood == 0) {
                    chestArr[b].isdead = true;
                    playPlane.score += 30;
                    playPlane.scoreNode.innerHTML = "分数：" + playPlane.score;
                }
                //子弹消失
                mainObj.removeChild(ziDanArr[b].imgNodes);
                ziDanArr.splice(b, 1);
                b--;
                break
            }
        }
        if (playPlane.score < 50) {
            playPlane.imgNodes.src = playImg[0];
            ziDanArr[i].imgNodes.src = bullteImg[0];
        } else if (playPlane.score >= 50 && playPlane.score <= 200) {
            playPlane.imgNodes.src = playImg[1];
            ziDanArr[i].imgNodes.src = bullteImg[1];
        } else if (playPlane.score > 200 && playPlane.score <= 400) {
            playPlane.imgNodes.src = playImg[2];
            ziDanArr[i].imgNodes.src = bullteImg[3];
        } else if (playPlane.score > 400) {
            playPlane.imgNodes.src = playImg[3];
            ziDanArr[i].imgNodes.src = bullteImg[3];
        }
    }
}
//敌人消失
function corpsesDi() {
    for (var b = 0; b < chestArr.length; b++) {
        if (chestArr[b].isdead) {
            mainObj.removeChild(chestArr[b].imgNodes);
            chestArr.splice(b, 1);
            b--;
        }
    }
    for (var a = 0; a < diPlaneArr.length; a++) {
        if (diPlaneArr[a].isdead) {
            mainObj.removeChild(diPlaneArr[a].imgNodes);
            diPlaneArr.splice(a, 1);
            a--;
        }
    }
    for (var i = 0; i < diBirdArr.length; i++) {
        if (diBirdArr[i].isdead) {
            mainObj.removeChild(diBirdArr[i].imgNodes);
            diBirdArr.splice(i, 1);
            i--;
        }
    }
    for (var j = 0; j < diGhostArr.length; j++) {
        if (diGhostArr[j].isdead) {
            mainObj.removeChild(diGhostArr[j].imgNodes);
            diGhostArr.splice(j, 1);
            j--;
        }
    }
    for (var k = 0; k < diBossArr.length; k++) {
        if (diBossArr[k].isdead) {
            mainObj.removeChild(diBossArr[k].imgNodes);
            diBossArr.splice(k, 1);
            clearInterval(bossPause);
            k--;
        }
    }
}

//创建宝箱
function createChest() {
    for (var i = 0; i < diPlaneArr.length; i++) {
        var x = 1300 - parseInt(diPlaneArr[i].imgNodes.style.left);
        var y = parseInt(diPlaneArr[i].imgNodes.style.top);
    }
    var Chest = new diPrototype(x, y, "dao/enemy/thing.gif", 10, 1);
    chestArr.push(Chest);
}
//创建敌人（小飞机）
function createDiPlane() {
    var x = 1100;
    var y = parseInt(Math.random() * 500);
    var diPlane = new diPrototype(x, y, "dao/enemy/plane/move.gif", 10, 3);
    diPlaneArr.push(diPlane);
}
//创建敌人（小鸟）
function createDiBird() {
    var x = 1100;
    var y = parseInt(Math.random() * 500);
    var diBird = new diPrototype(x, y, "dao/enemy/bird/move.gif", 10, 4);
    diBirdArr.push(diBird);
}
//创建敌人（怪兽）
function createDiGhost() {
    var x = 1242;
    var y = parseInt(Math.random() * 528);
    var diGhost = new diPrototype(x, y, "dao/enemy/ghost/move.gif", 10, 8);
    diGhostArr.push(diGhost);
}
//创建敌人boss]
function createDiBoss() {
    var x = 1003;
    var y = parseInt(Math.random() * 446);
    var diBoss = new diPrototype(x, y, "dao/enemy/boss/attack.gif", 10, 20);
    diBossArr.push(diBoss);
    setTimeout(bossHit, 0);
    bossPause = setInterval(bossHit, 6000);
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

//大招
function daZhao() {
    mainObj.innerHTML += "<images src='dao/skill.gif' style='top:-50px;left:100px;'/>"

}

//定义键盘事件  按下键盘的时候触发，松开键盘法时候取消触发
document.onkeydown = function () {
    var e = window.event || arguments[0];
    if (e.keyCode == 13) {
        daZhao();
    }
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
function diPrototype(x, y, src, speed, blood) {
    //属性
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    // blood=2;
    this.blood = blood;
    this.isdead = false;
    this.imgNodes = document.createElement("img");

    //方法
    this.shot = function () {
        var top = parseInt(this.imgNodes.style.top);
        var left = parseInt(this.imgNodes.style.left);
        var x = left;
        var y = top;
        var bossbullet = new bossbulletPrototype(x, y, "dao/enemy/boss/attackBall.gif", 30);
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
