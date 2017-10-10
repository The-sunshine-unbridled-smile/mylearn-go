/**
 * Created by Mr.袁 on 2017/9/28.
 */
var s = -1;
var liebiao = 0;
/*默认显示的数据*/
var peopleArr = window.top.peopleArr;
Data();
function Data(){
    for (var i = 0; i < peopleArr.length; i++) {
        liebiao++;
        var str = '<tr class="query">' +
            '<td><input type="checkbox" class="items"></td>' +
            '<td class="ct" id=' + liebiao + '></td>' +
            '<td class="ct"></td>' +
            '<td class="ct"></td>' +
            '<td class="ct"></td>' +
            '<td class="ct"></td>' +
            '<td class="ct"></td>' +
            '<td class="ct"></td>' +
            '<td class="ct"></td>' +
            '<td><button type="button" class="Ope">修改</button>' +
            '<button type="button" class="Del">删除</button></td>' +
            '</tr>';
        $("#tfoot").append(str);
        $.each(peopleArr[i], function (key) {
            s++;
            $(".ct")[s].innerText = peopleArr[i][key];
        });
        var strs="<option>"+peopleArr[i].depName+"</option>";
        $(".gangwei").append(strs)
    }
}
/*岗位角色*/
/*修改数据*/
var Operate = $(".Ope");
Operate.each(function () {
    /*单击修改获取修改数据的值*/
    $(document).on("click", ".Ope", function () {
        var id = $(this).parent().parent().children(":eq(1)").text();
        var bm = $(this).parent().parent().children(":eq(2)").text();
        var xm = $(this).parent().parent().children(":eq(3)").text();
        var zh = $(this).parent().parent().children(":eq(4)").text();
        var phone = $(this).parent().parent().children(":eq(5)").text();
        var qq = $(this).parent().parent().children(":eq(6)").text();
        var email = $(this).parent().parent().children(":eq(7)").text();
        var jiaose = $(this).parent().parent().children(":eq(8)").text();
        window.location.href = "addPersonal.html?id=" + id + "&bm=" + bm + "&xm=" + xm + "&zh=" + zh + "&phone=" + phone
            + "&qq=" + qq + "&email=" + email + "&jiaose=" + jiaose;
    })
});

/*删除信息*/
$(document).on("click", ".Del", function () {
    if (confirm("确认删除吗？")) {
        var id = $(this).parent().parent().children(":eq(1)").text();
        $(this).parent().parent().remove();
        for (var i = 0; i < peopleArr.length; i++) {
            if (id == peopleArr[i].peopleNo) {
                peopleArr.splice(i, 1);
            }
        }

    }
});
/*新增信息*/
$("#new_people").click(function () {
    window.location.href = "addPersonal.html";
});
/*查询信息*/
$("#search").click(function () {//给查询按钮设单击事件
    var name = $(".name").val(),//获取查询信息框的值
        phone = $(".phone").val(),
        line = $(".line").val();
    var count = 0;//计数后面判断数组中没有此人，
    if(name!=''&&phone!=''&&line!=''){
        $("#tfoot").html("")
    }else if(name==''&&phone==''&&line==''){
        alert("请输入要查询的信息")
    }else{
        $("#tfoot").html("");
        for (var i = 0; i < peopleArr.length; i++) {//遍历数组
            $.each(peopleArr[i], function () {//遍历数组中的对象
                if (name == peopleArr[i].peopleName ||
                    phone == peopleArr[i].peoplePhone ||
                    line == peopleArr[i].peopleQQ) {//判断条件是否相等，
                    var str = '<tr class="query">' +
                        '<td><input type="checkbox" class="items"></td>' +
                        '<td class="ct" id=' + liebiao + '>' + peopleArr[i].peopleNo + '</td>' +
                        '<td class="ct">' + peopleArr[i].depName + '</td>' +
                        '<td class="ct">' + peopleArr[i].peopleName + '</td>' +
                        '<td class="ct">' + peopleArr[i].peopleAcount + '</td>' +
                        '<td class="ct">' + peopleArr[i].peoplePhone + '</td>' +
                        '<td class="ct">' + peopleArr[i].peopleQQ + '</td>' +
                        '<td class="ct">' + peopleArr[i].peopleEmail + '</td>' +
                        '<td class="ct">' + peopleArr[i].roleName + '</td>' +
                        '<td><button type="button" class="Ope">修改</button>' +
                        '<button type="button" class="Del">删除</button></td>' +
                        '</tr>';
                    $("#tfoot").append(str);//将列表变为当前查询出的这一条
                    return false;//退出循环
                }else{
                    count++;//不满足时就累加
                    return false;//跳出循环
                }
            });
            if (count == peopleArr.length) {//如果与数组长度相等，则没有此人
                alert("查无此人")
            }
        }
    }
});
/*全选*/
$(".allcheck").click(function () {
    if ($(this).prop("checked")) {
        $(".items").prop("checked", true);
        $(".items").attr("checked", true);
    }else{
        $(".items").prop("checked", false);
        $(".items").attr("checked", false);
    }
});
$(document).on("click",".items",function () {
    if ($(this).prop("checked")) {
        $(this).prop("checked", true);
        $(this).attr("checked", true);
        if ($(".items[checked]").length == $(".items").length) {
            $(".allcheck").prop("checked", true);
        }
    } else {
        $(this).prop("checked", false);
        $(this).attr("checked", false);
        $(".allcheck").prop("checked", false);
    }
})
/*删除多个*/
$("#Dels").click(function () {
    if (($(".items[checked]").length == 0)) {//判断是否有选中的复选框
        alert("请选择需要删除的项");
        return false;
    }
    if (confirm("确认要删除吗？")) {
        $(".items").each(function () {//遍历复选框
            if (($(this).attr("checked"))) {//判断复选框是否选中，选中就执行
                $(this).parent().parent().remove();//获取当前选中复选框的父元素进行移出
                var id = $(this).parent().siblings(":eq(0)").text();//获取id值
                for (var i = 0; i < peopleArr.length; i++) {//遍历数组
                    if (id == peopleArr[i].peopleNo) {
                        peopleArr.splice(i, 1);//删除数组中对应选中的复选框的对象
                    }
                }
            }
        });
    }
});
