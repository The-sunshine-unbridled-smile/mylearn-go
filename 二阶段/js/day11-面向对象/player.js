/**
 * Created by uid on 2017/9/11.
 */
var mainObj = document.getElementById("main");
createPlayer();
//创建实例飞机
function createPlayer() {
    var x = 0;
    var y = 534;
    var feijiPlayer = new player(x, y, "feiji/GodPlane.png", 5);
    feijiPlayer.init();       //执行飞机的组装
    // feijiPlayer.movePlayer();
}


//移动玩家飞机
function movePlayer() {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    switch (e) {
        case 37:
            alert("左");
            break;
        case 38:
            alert("上");
            break;
        case 39:
            alert("右");
            break;
        case 40:
            alert("下");
            break;
        default:
            alert("cuowu");
            break;
    }
}
//创建玩家飞机原型
function player(x, y, src, speed) {
    this.x = x;
    this.y = y;
    this.src = src;
    this.speed = speed;
    this.imgNodes = document.createElement("img");
    this.init = function () {
        this.imgNodes.src = this.src;
        this.imgNodes.style.left = x + "px";
        this.imgNodes.style.top = y + "px";
        mainObj.appendChild(this.imgNodes);
    };
}