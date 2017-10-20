/**
 * Created by admin on 2017/9/30.
 */
//拉取模拟数据到列表开始
//列表中默认显示数据
var role = -1;
var list = 0;
var roleArr = window.top.roleArr;
//循环遍历所有的td标签,将模拟数据拉去添加到页面
for (var i = 0; i < roleArr.length; i++) {
    list++;
    var str = '<tr class="interline">' +
        '<td class="line"></td>' +
        '<td class="line"></td>' +
        '<td class="line"></td>' +
        '<td class="line"></td>' +
        '<td><button type="button" class="revise">修改</button>' +
        '<button type="button" class="del">删除</button>'+
        '</td>' +
        '</tr>';
    $("#tbody").append(str);
    $.each(roleArr[i], function (key) {
        role++;
        $(".line")[role].innerText = roleArr[i][key];

    })
}
//拉取模拟数据到列表结束
//修改内容
var roleRevise = $(".revise");
roleRevise.each(function () {
    //点击获取修改数据的值
    $(document).on("click", ".revise", function () {
        var roleNo = $(this).parent().parent().children(":eq(0)").text();
        var put = $(this).parent().parent().children(":eq(1)").text();
        var der = $(this).parent().parent().children(":eq(2)").text();
        var ders = $(this).parent().parent().children(":eq(3)").text();
        window.location.href = "roleManchild.html?id=" + roleNo + "&put=" + put + "&der=" + der + "&ders=" + ders;
    })
});
//删除角色信息
$(document).on("click", ".del", function () {
    if (confirm("确认删除吗?")) {
        $(this).parent().parent().remove();
        var put = $(this).parent().parent().children(":eq(0)").text();
        for (var i = 0; i < roleArr.length; i++) {
            if (put == roleArr[i].roleNo) {
                roleArr.splice(i, 1);
                break;
            }
        }
    }
});
//查询信息
$(".Search").click(function () {       //给查询按钮设置单击事件
    var num = $("#perNo").val(),
        name = $("#perName").val();
    var count = 0;            //计数判断数组中是否有此人
    if (num != '' && name != '') {
        $("#tbody").html("");
    }else if(num==''&&name==''){
        alert("请输入要查询的信息")
    }else{
        $("#tbody").html("");
        for (var i = 0; i < roleArr.length; i++) {       //遍历人员列表数组
            $.each(roleArr[i], function () {         //遍历数组中的对象
                if (num == roleArr[i].roleNo ||
                    name == roleArr[i].roleName) {       //判断条件是否相等
                    var str = '<tr class="interline">' +
                        '<td class="line" id=' + list + '>' + roleArr[i].roleNo + '</td>' +
                        '<td class="line">' + roleArr[i].roleName + '</td>' +
                        '<td class="line">' + roleArr[i].roleDes + '</td>' +
                        '<td class="line">' + roleArr[i].roleBz + '</td>' +
                        '<td><button type="button" class="revise">修改</button></td>' +
                        '<td><button type="button" class="del">删除</button></td>' +
                        '</tr>';
                    $("#tbody").append(str);   //将列表变为当前查询的这一条
                    return false;   //退出循环
                }else{
                    count++;             //不满足查询条件就累加
                    return false;        //累加后跳出循环
                }
            });
            if(count==roleArr.length){            //如果与数组长度相等，则没有此人
                alert("查无此人")
            }
        }
    }
});
